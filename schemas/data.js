NEWSCHEMA('Data', function(schema) {

	// schema.define('id', 'String');
	// schema.define('permissions', '[String]');
	// schema.define('data', 'Object', true);

	schema.setQuery(function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.command = 'list';
		$.query.typeid = $.params.typeid;
		$.query.user = $.user;

		FUNC.makequery($.query, $.callback);
	});

	schema.setRead(function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.command = 'detail';
		$.query.id = $.params.id;
		$.query.typeid = $.params.typeid;
		$.query.user = $.user;

		FUNC.makequery($.query, $.callback);
	});

	schema.addWorkflow('first', function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.command = 'read';
		$.query.typeid = $.params.typeid;
		$.query.user = $.user;

		FUNC.makequery($.query, $.callback);
	});

	schema.addWorkflow('exists', function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.command = 'check';
		$.query.typeid = $.params.typeid;
		$.query.user = $.user;
		$.query.fields = 'id';

		FUNC.makequery($.query, $.callback);
	});

	schema.addWorkflow('find', function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.command = 'find';
		$.query.typeid = $.params.typeid;
		$.query.user = $.user;

		FUNC.makequery($.query, $.callback);
	});

	schema.addWorkflow('count', function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.command = 'count';
		$.query.typeid = $.params.typeid;
		$.query.user = $.user;

		FUNC.makequery($.query, $.callback);
	});

	schema.addWorkflow('check', function($, model) {

		if (MAIN.paused || !MAIN.ready) {
			$.invalid(503);
			return;
		}

		var type = MAIN.types[$.id];
		if (!type) {
			$.invalid(404);
			return;
		}

		var operation = model.id ? 'C' : 'U';
		$.typeid = $.id;

		if (!$.user.sa && type.permissions && type.permissions.length) {
			if (!FUNC.types_permit(operation, type, $.user)) {
				$.invalid('permissions');
				return;
			}
		}

		FUNC.types_validate($, $.typeid, operation, model || EMPTYOBJECT, function(err, response) {

			if (err) {
				$.invalid(err.map(m => m.error));
				return;
			}

			$.validated = response;
			$.success(response);
		});
	});

	schema.setSave(async function($, model) {

		if (MAIN.paused || !MAIN.ready) {
			$.invalid(503);
			return;
		}

		var type = MAIN.types[$.params.typeid];

		if (!type) {
			$.invalid('@(Invalid type)');
			return;
		}

		var db = DB();
		var validated = $.validated || model;
		var customid;
		var fields = type.fields;
		var id = validated.id;

		NOW = new Date();

		// Name
		var name = validated.name || '';
		if (name)
			name += '';

		if (name) {
			validated.name = name;
			validated.search = name.toSearch();
		}

		// If "id" will start with @mycustomid then this id will be used for a new record
		if (id && id[0] === '@') {
			customid = id.substring(1);
			id = null;
		}

		var is = customid ? await db.check(type.table).id(customid).promise($) : false;
		if (is && customid)
			id = customid;

		var builder;

		validated.id = undefined;

		if (id) {

			// Locked fields (Cannot be edited)
			if (!$.user.sa) {
				for (var field in validated) {
					if (fields[field] && fields[field].locked)
						delete validated[field];
				}
			}

			validated.dtupdated = NOW;
			builder = db.modify(type.table, validated).id(id).where('isremoved', false).callback($.successful(() => $.callback(id)));

		} else {
			validated.id = customid || UID();
			validated.dtcreated = NOW;
			builder = db.insert(type.table, validated).callback($.successful(() => $.callback(validated.id)));
		}

		if (PREF.changelog) {
			builder.data(function() {
				if (!validated.id)
					validated.id = id;
				FUNC.changelog('data_save', validated, !is, $);
			});
		}

	});

	schema.setRemove(async function($) {

		if (MAIN.paused || !MAIN.ready) {
			$.invalid(503);
			return;
		}

		var id = $.params.id;
		var typeid = $.params.typeid;
		var type = MAIN.types[typeid];

		if (!type) {
			$.invalid(404);
			return;
		}

		if (!$.user.sa && type.permissions && type.permissions.length) {
			if (!FUNC.types_permit('D', type, $.user)) {
				$.invalid('permissions');
				return;
			}
		}

		if (type) {

			var db = DB();
			var response = await db.modify(type.table, { isremoved: true, dtremoved: NOW }).id(id).where('isremoved', false).promise($);

			if (!response) {
				$.callback(null);
				return;
			}

			// Clean/Remove related records
			var remove = [];
			for (var key in MAIN.types) {
				var t = MAIN.types[key];
				if (t !== type) {
					for (var attr of t.attrs) {
						if (attr.typeid && attr.typeid === type.id)
							remove.push({ table: t.table, column: attr.id, remove: attr.typeremove });
					}
				}
			}

			for (var item of remove) {

				var obj = {};
				if (item.remove)
					obj.isremoved = true;
				else
					obj[item.column] = '';

				await db.modify(item.table, obj).where(item.column, id).where('isremoved', false).promise($);
			}

			$.callback(id);

			if (PREF.changelog)
				FUNC.changelog('data_remove', { id: id }, null, $);

		} else
			$.callback(null);
	});

	schema.addWorkflow('types', async function($) {

		if (MAIN.paused || !MAIN.ready) {
			$.invalid(503);
			return;
		}

		var builder = DB().find('tbl_type').fields('id,name,singular,color,icon,category,attrs,options');
		var types = $.user.types ? Object.keys($.user.types) : EMPTYARRAY;

		if (types.length)
			builder.in('id', types);

		var items = await builder.promise($);

		for (var item of items) {

			for (var attr of item.attrs) {
				attr.default = undefined;
				attr.note = undefined;
				attr.permissions = undefined;
				attr.alias = undefined;
				attr.locked = undefined;
				attr.sortindex = undefined;
				attr.verify = undefined;
			}
		}

		$.callback(items);
	});

	schema.addWorkflow('attrs', async function($) {

		if (MAIN.paused || !MAIN.ready) {
			$.invalid(503);
			return;
		}

		if (!$.user.sa && $.user.types && $.user.types[$.id]) {
			$.callback(EMPTYARRAY);
			return;
		}

		var item = await DB().read('tbl_type').fields('id,attrs').id($.id).promise($);

		if (!item) {
			$.callback(EMPTYARRAY);
			return;
		}

		var arr = [];

		for (var attr of item.attrs) {
			attr.default = undefined;
			attr.note = undefined;
			attr.permissions = undefined;
			attr.alias = undefined;
			attr.locked = undefined;
			attr.sortindex = undefined;
			attr.verify = undefined;
			arr.push(attr);
		}

		$.callback(arr);
	});

	schema.addWorkflow('export', function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		var typeid = $.params.typeid;
		var id = $.params.id;
		var type = MAIN.types[typeid];
		if (type)
			DB().one(type.table).id(id).error(404).callback($.callback);
		else
			$.invalid('@(Invalid type)');
	});

});