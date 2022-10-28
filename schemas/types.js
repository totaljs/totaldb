NEWSCHEMA('Attr', function(schema) {
	schema.define('id', 'String');
	schema.define('name', 'String', true);
	schema.define('alias', 'String');
	schema.define('icon', 'String');
	schema.define('color', 'String');
	schema.define('type', [], true);
	schema.define('typeid', 'String');
	schema.define('currency', 'String');
	schema.define('sortindex', Number);
	schema.define('permissions', '[String]');
	schema.define('verify', 'String'); // Link to the Total.js function or Flow?
	schema.define('locked', 'Boolean'); // Cannot be changed in update method
	schema.define('default', 'String'); // Default value
	schema.define('required', 'Boolean');
	schema.define('typeremove', 'Boolean');
	schema.define('sortindex', 'Number');
	schema.define('min', 'Number2');
	schema.define('max', 'Number2');
	schema.define('note', 'String');
	schema.define('error', 'String');      // error message
	schema.define('validate', 'String'); // a validation funcion val {Type} => Boolean
});

NEWSCHEMA('Types/Offset', function(schema) {

	schema.define('id', String);
	schema.define('x', Number);
	schema.define('y', Number);

	schema.setSave(async function($, model) {
		var type = MAIN.types[model.id];
		if (type) {
			var id = model.id;
			delete model.id;
			DB().modify('tbl_type', model).id(id).error(404).callback($.done(id));
			type.x = model.x;
			type.y = model.y;
		} else
			$.invalid(404);
	});

});

NEWSCHEMA('Types', function(schema) {

	schema.define('id', 'String(30)');
	schema.define('name', 'String(50)', true);
	schema.define('singular', 'String(50)', true);
	schema.define('category', String);
	schema.define('icon', 'Icon');
	schema.define('color', 'Color');
	schema.define('attrs', '[Attr]', true);
	schema.define('columns', Number);
	schema.define('note', String);
	schema.define('x', Number);
	schema.define('y', Number);
	schema.define('options', Object);

	// For import only
	schema.define('dtcreated', Date);
	schema.define('dtupdated', Date);

	schema.setQuery(function($) {

		if (!$.user.sa && (!$.user.options || !$.user.options.types)) {
			$.invalid(401);
			return;
		}

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		DB().find('tbl_type').sort('dtcreated', true).callback($.callback);
	});

	schema.addWorkflow('count', function($) {

		if (!$.user.sa && (!$.user.options || !$.user.options.types)) {
			$.invalid(401);
			return;
		}

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		// Counter
		var sql = [];
		for (var key in MAIN.types) {
			var type = MAIN.types[key];
			sql.push('SELECT COUNT(1)::int4 as count, \'{1}\' as id FROM {0} WHERE isremoved=FALSE'.format(type.table, type.id));
		}

		DB().query(sql.join(' UNION ALL ')).callback($.callback);
	});

	schema.setRead(function($) {

		if (!$.user.sa && (!$.user.options || !$.user.options.types)) {
			$.invalid(401);
			return;
		}

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		var id = $.id;
		DB().read('tbl_type').id(id).error(404).callback($.callback);
	});

	schema.setSave(async function($, model) {

		if (!$.user.sa && (!$.user.options || !$.user.options.types)) {
			$.invalid(401);
			return;
		}

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		var id = model.id;
		var customid = id;
		if (customid && customid[0] === '@') {
			customid = customid.substring(1);
			model.id = null;
		}

		model.attrs = JSON.stringify(model.attrs);
		model.options = JSON.stringify(model.options);

		var db = DB();

		if (id) {
			var item = await db.check('tbl_type').id(customid).promise($);
			if (item) {

				if ($.user.options && $.user.options.types) {
					delete model.x;
					delete model.y;
				}

				model.dtupdated = NOW;
				db.modify('tbl_type', model).id(id).error(404).done($, function() {
					FUNC.types_load($.successful(function() {
						$.success(id);
						model.id = id;
						MAIN.ws && MAIN.ws.send({ type: 'type_save', id: model.id });
						PREF.changelog && FUNC.changelog('type_save', model, false, $);
					}));
				});
				return;
			}
		}

		model.id = customid || ('type' + U.random_number(3));
		model.dtcreated = NOW;

		db.insert('tbl_type', model).done($, function() {
			FUNC.types_load($.successful(function() {
				$.success(model.id);
				MAIN.ws && MAIN.ws.send({ type: 'type_save', id: model.id });
				PREF.changelog && FUNC.changelog('type_save', model, true, $);
			}));
		});

	});

	schema.setRemove(function($) {

		if (!$.user.sa && (!$.user.options || !$.user.options.types)) {
			$.invalid(401);
			return;
		}

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		var id = $.id;
		var type = MAIN.types[id];

		if (!type) {
			$.invalid(404);
			return;
		}

		var remove = [];

		for (var key in MAIN.types) {

			if (key === id)
				continue;

			var type = MAIN.types[key];
			for (var attr of type.attrs) {
				if (attr.typeid === id)
					remove.push(key);
			}
		}

		remove.wait(function(typeid, next) {

			var db = DB();

			db.read('tbl_type').id(typeid).callback(function(err, response) {
				if (response) {
					response.attrs = response.attrs.remove('typeid', id);
					db.modify('tbl_type', { attrs: JSON.stringify(response.attrs), dtupdated: NOW }).id(typeid).callback(next);
				} else
					next();
			});

		}, function() {
			DB().remove('tbl_type').id(id).callback(function() {
				FUNC.types_load($.successful(function() {
					$.success(id);
					MAIN.ws && MAIN.ws.send({ type: 'type_remove', id: id });
					PREF.changelog && FUNC.changelog('type_remove', { id: id }, null, $);
				}));
			});
		});

	});

	schema.addWorkflow('cl', async function($) {

		if (!$.user.sa) {
			$.invalid(401);
			return;
		}

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.callback(MAIN.datatypes);
	});

	schema.addWorkflow('backup', async function($) {

		if (!$.user.sa) {
			$.invalid(401);
			return;
		}

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		var isdata = $.query.data === '1';
		var filename = PATH.temp('totaldb_' + (new Date()).format('yyyy-MM-dd-HHmm') + '.json');
		var types = await DB().find('tbl_type').promise();
		var writer = F.Fs.createWriteStream(filename);
		var builder = [];

		for (var item of types) {
			item.clear = isdata;
			item.collection = 'type';
			item.id = '@' + item.id;
			builder.push(JSON.stringify(item));
		}

		writer.write(builder.join('\n') + '\n');
		builder = null;

		types.wait(async function(type, next) {

			if (!isdata) {
				next();
				return;
			}

			var id = type.id.substring(1);
			var db = DB();
			var table = 'tbl_' + id;
			var limit = 1000;

			var download = async function(page) {

				var response = await db.find(table).take(limit).skip(page * limit).promise();

				if (!response.length) {
					next();
					return;
				}

				var builder = [];
				for (var item of response) {
					item.id = '@' + item.id;
					item.collection = id;
					builder.push(JSON.stringify(item));
				}

				writer.write(builder.join('\n') + '\n');

				if (response.length < limit)
					next();
				else
					download(page + 1);
			};

			download(0);

		}, function() {

			writer.on('finish', function() {
				$.controller.file('~' + filename, true);
				$.cancel();
			});

			writer.end();
		});

	});

	schema.addWorkflow('restore', function($) {

		if (!$.user.sa) {
			$.invalid(401);
			return;
		}

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		var filename = $.files[0].path;
		var stream = F.Fs.createReadStream(filename);
		var types = [];

		stream.on('data', U.streamer('\n', function(item) {
			if (item.indexOf('"collection":"type"') !== -1) {
				var data = item.trim().parseJSON(true);
				if (data.id[0] === '@')
					data.id = data.id.substring(1);
				types.push(data);
			}
		}));

		FINISHED(stream, async function() {

			var db = DB();
			var sql = [];
			var currtypes = await db.find('tbl_type').fields('id').promise();

			// DELETES ONLY IMPORTED TYPES
			for (var item of currtypes) {
				var m = types.findItem('id', item.id);
				if (m) {
					m.clear && sql.push('DROP TABLE tbl_' + item.id);
					sql.push('DELETE FROM tbl_type WHERE id=' + PG_ESCAPE(item.id));
				}
			}

			sql.wait(function(query, next) {
				DB().query(query).callback(() => next());
			}, function() {

				// Done, DB is clear
				// import

				var db = DB();

				for (var item of types) {

					var data = {};

					for (var key of schema.fields) {
						var val = item[key];
						data[key] = val;
					}

					data.attrs = JSON.stringify(data.attrs || EMPTYARRAY);
					data.options = JSON.stringify(data.options || EMPTYOBJECT);
					db.insert('tbl_type', data);
				}

				db.callback(function() {
					// DONE
					// Refreshing types
					FUNC.types_load(function() {

						// IMPORT DATA
						var stream = F.Fs.createReadStream(filename);
						var queue = [];

						var flush = function(callback) {

							if (!queue.length) {
								callback();
								return;
							}

							var db = DB();
							var tmp = queue.splice(0);
							for (var item of tmp) {
								var table = 'tbl_' + item.collection;
								item.collection = undefined;
								item.clear = undefined;
								if (item.id[0] === '@')
									item.id = item.id.substring(1);
								db.insert(table, item);
							}

							db.callback(callback);
						};

						stream.on('data', U.streamer('\n', function(item) {

							if (item.indexOf('"collection":"type"') !== -1)
								return;

							var data = item.trim().parseJSON(true);
							if (data) {
								if (data.id[0] === '@')
									data.id = data.id.substring(1);
								if (queue.push(data) > 50) {
									stream.pause();
									flush(() => stream.resume());
								}
							}

						}));

						FINISHED(stream, function() {
							F.Fs.unlink(filename, NOOP);
							flush($.done());
						});
					});
				});

			});

		});

		$.controller.autoclear(false);
	});

	schema.addWorkflow('clear', async function($) {

		if (!$.user.sa) {
			$.invalid(401);
			return;
		}

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		var types = await DB().find('tbl_type').fields('id').promise();
		var sql = [];

		// DELETE
		for (var item of types)
			sql.push('DROP TABLE tbl_' + item.id);

		sql.push('DELETE FROM tbl_type');
		sql.wait(function(item, next) {
			DB().query(item).callback(() => next());
		}, function() {
			FUNC.types_load($.done());
		});
	});

});