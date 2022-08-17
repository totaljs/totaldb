const SCALAR = { max: 1, min: 1, count: 1, sum: 1, group: 1 };
const REG_NUMBER = /^(-)?[0-9\.]+$/;
const COMPARER = { '=': 1, '>': 1, '<': 1 };

function makequery(type, filter, where) {

	// incomplete

	var index = 1;
	var attrs = [];

	filter = filter.replace(/\[[a-z_\d]+(=|>\<)+.*?\]/g, function(text) {

		text = text.substring(1, text.length - 1);

		var key = '';
		var val = '';
		var comparer = '';

		for (var i = 0; i < text.length; i++) {
			if (COMPARER[text[i]]) {
				key = text.substring(0, i);
				comparer = text.substring(i, i + 1);
				val = text.substring(i + 1);
				break;
			}
		}

		if (key) {

			var index = key.indexOf('_');
			var nested = index === -1 ? '' : key.substring(index + 1);

			if (index !== -1)
				key = key.substring(0, index);

			var t = type.fields[key];

			console.log(t);

		} else {
			// fallback
			key = '1';
			comparer = '=';
			val = '1';
		}

		return '$' + (index++);

	});

	filter = filter.replace(/\s(and|or)\s/i, function(text) {
		return (/and/i).test(text) ? ' \0 ' : ' \1 ';
	});

	console.log(filter);

	// Some not allowed injection
	if ((/a-z/i).test(filter))
		return;
}

NEWSCHEMA('Data', function(schema) {

	schema.define('id', 'String');
	// schema.define('permissions', '[String]');
	schema.define('body', 'Object', true);

	var Listing = async function($, callback) {

		if (MAIN.paused || !MAIN.ready) {
			$.invalid(503);
			return;
		}

		var type = MAIN.types[$.id];
		if (!type) {
			$.invalid(404);
			return;
		}

		if (!$.user.sa && type.permissions && type.permissions.length) {
			if (!FUNC.types_permit('R', type, $.user)) {
				$.invalid('permissions');
				return;
			}
		}

		var db = DB();
		var query = $.query;
		var fields = '';
		var where = ['a.isremoved=FALSE'];
		var sort = ' ORDER BY a.dtcreated DESC';
		var joinindex = 0;
		var joins = '';
		var offset = '';
		var scalar = SCALAR[query.type];
		var scalarfield = '';
		var response;
		var rfieldsreversed = false;
		var rfields;
		var joinedcache = {};
		var joined;
		var index;
		var tmp2;
		var tmp;

		// var filter = query.filter || '';
		// makequery(type, filter);

		if (query.scalar) {
			tmp = type.fields[query.scalar];
			if (tmp)
				scalarfield = 'a.' + tmp.id;
			else
				scalarfield = 'a.id';
		}

		if (!scalar) {
			tmp = query.fields ? query.fields.split(',') : null;
			if (tmp) {
				rfields = {};
				for (var item of tmp) {

					if (item[0] === '-') {
						rfieldsreversed = true;
						item = item.substring(1);
					}

					index = item.indexOf('_');
					if (index !== -1) {
						let a = type.fields[item.substring(0, index)];
						if (a) {
							let b = MAIN.types[a.typeid];
							if (a.typeid && b && b.fields[item.substring(index + 1)])
								rfields[item] = 1;
							rfields[a.id] = 1;
						}
					} else if (type.fields[item])
						rfields[item] = 1;

				}
			}
		}

		for (var key in type.fields) {

			var attr = type.fields[key];

			if (rfieldsreversed) {
				if (rfields[attr.id])
					continue;
			} else if (rfields && !rfields[attr.id])
				continue;

			if (!scalar)
				fields += ',a.' + attr.id;

			switch (attr.type) {

				case 'type':
					if (!scalar) {
						tmp = MAIN.types[attr.typeid];
						if (tmp) {

							if (!joined)
								joined = [];

							joined.push(attr);

							var cache = joinedcache[attr.typeid] = { alias: 'a' + joinindex, type: tmp, attr: attr, fields: [] };

							joins += ' LEFT JOIN {0} {1} ON {1}.id=a.{2}'.format(tmp.table, 'a' + joinindex, attr.id);

							if (!query.expand) {
								fields += ',a' + joinindex + '.name AS ' + attr.id + '_name';
								cache.fields.push('name');
							}

							for (let m of tmp.attrs) {
								if (query.expand) {
									tmp2 = attr.id + '_' + m.id;
									if (rfieldsreversed) {
										if (rfields[tmp2])
											continue;
									} else if (rfields && !rfields[tmp2])
										continue;
									cache.fields.push(m.id);
									fields += ',a' + joinindex + '.' + m.id + ' AS ' + attr.id + '_' + m.id;
								}

								tmp2 = query[attr.id + '_' + m.id];
								tmp2 && makesqlwhere(where, 'string', 'a' + joinindex + '.' + m.id, tmp2);

							}

							joinindex++;

						} else {
							// missing fields
						}
					}
					break;

				case 'number':
				case 'currency':
					tmp = query[attr.id];
					tmp && makesqlwhere(where, 'number', 'a.' + attr.id, tmp);
					break;

				case 'date':
				case 'date2':
					tmp = query[attr.id];
					tmp && makesqlwhere(where, 'date', 'a.' + attr.id, tmp);
					break;

				default:
					tmp = query[attr.id];
					tmp && makesqlwhere(where, 'string', 'a.' + attr.id, tmp);
					break;
			}

		}

		if (!scalar && query.sort) {
			tmp = query.sort.split(',');
			sort = '';
			for (var m of tmp) {

				var t = 'asc';
				let index = m.lastIndexOf('_');

				if (index !== -1) {
					t = m.substring(index + 1);
					m = m.substring(0, index);
				}

				// Is join?
				index = m.lastIndexOf('_');
				if (index !== -1) {

					tmp = type.fields[m.substring(0, index)];
					if (tmp) {
						var typetmp = joinedcache[tmp.typeid];
						if (typetmp) {
							m = m.substring(index + 1);
							tmp = typetmp.type.fields[m];
							if (tmp)
								sort += ',' + typetmp.alias + '.' + m + ' ' + (t === 'desc' ? 'DESC' : 'ASC');
						}
					}

				} else if (type.fields[m])
					sort += ',' + m + ' ' + (t === 'desc' ? 'DESC' : 'ASC');
			}

			if (sort)
				sort = ' ORDER BY ' + sort.substring(1);
		}

		where = where.length ? (' WHERE ' + where.join(' AND ')) : '';

		// db.debug();

		if (!query.limit)
			query.limit = 100;

		if (!query.type)
			query.type = 'list';

		if (!scalar && query.type !== 'read') {

			query.page = query.page ? U.parseInt(query.page) : 1;
			query.limit = query.limit ? U.parseInt(query.limit) : 100;

			if (query.limit > 5000)
				query.limit = 5000;

			var take = query.limit;
			var skip = (query.page - 1) * take;

			if (take && skip)
				offset += ' LIMIT ' + take + ' OFFSET ' + skip;
			else if (query.take)
				offset += ' LIMIT ' + take;
			else if (skip)
				offset += ' OFFSET ' + skip;
		}

		if (fields)
			fields = fields.substring(1);

		switch (query.type) {

			case 'list':
				var count = await db.query('SELECT COUNT(1)::int4 as count FROM ' + type.table + ' a' + joins + where).promise();
				var items = await db.query('SELECT ' + fields + ' FROM ' + type.table + ' a' + joins + where + sort + offset).promise();
				response = {};
				response.limit = query.limit;
				response.count = count[0].count;
				response.pages = Math.ceil(response.count / query.limit);
				response.page = query.page;
				response.items = items;

				if (joined) {
					for (var item of items) {
						for (var m of joined) {
							tmp = {};
							tmp.id = item[m.id];
							tmp.typeid = m.typeid;

							for (var col of joinedcache[m.typeid].fields) {
								tmp[col] = item[m.id + '_' + col];
								item[m.id + '_' + col] = undefined;
							}

							item[m.id] = tmp;
						}
					}
				}

				callback(response);
				break;

			case 'find':
				var items = await db.query('SELECT ' + fields + ' FROM ' + type.table + ' a' + joins + where + sort + offset).promise();
				if (joined) {
					for (var item of items) {
						for (var m of joined) {
							tmp = {};
							tmp.id = item[m.id];
							tmp.typeid = m.typeid;

							for (var col of joinedcache[m.typeid].fields) {
								tmp[col] = item[m.id + '_' + col];
								item[m.id + '_' + col] = undefined;
							}

							item[m.id] = tmp;
						}
					}
				}

				callback(items);
				break;

			case 'max':
			case 'min':
			case 'sum':
				response = await db.query(('SELECT {0}({1}) as value FROM {2} a{3}').format(query.type.toUpperCase(), scalarfield, type.table, where)).promise();
				response = response[0].value;
				if (typeof(response) === 'string' && REG_NUMBER.test(response))
					response = +response;
				callback(response);
				break;

			case 'count':
				response = await db.query(('SELECT COUNT(1)::int4 as value FROM {0} a{1}').format(type.table, where)).promise();
				callback(response[0].value);
				break;

			case 'group':
				response = await db.query(('SELECT {0}, COUNT(1)::int4 as value FROM {1} a{2} GROUP BY {0} ORDER BY 1 DESC').format(scalarfield, type.table, where)).promise();
				callback(response);
				break;

			case 'read':
				var items = await db.query('SELECT ' + fields + ' FROM ' + type.table + ' a' + joins + where + ' LIMIT 1').promise();
				if (items.length) {
					if (joined) {
						for (var item of items) {
							for (var m of joined) {
								tmp = {};
								tmp.id = item[m.id];
								tmp.typeid = m.typeid;

								for (var col of joinedcache[m.typeid].fields) {
									tmp[col] = item[m.id + '_' + col];
									item[m.id + '_' + col] = undefined;
								}

								item[m.id] = tmp;
							}
						}
					}
					callback(items[0]);
				} else
					$.invalid(404);
				break;
		}

	};

	schema.setQuery(function($) {
		$.query.typeid = $.params.id;
		Listing($, $.callback);
	});

	schema.setRead(function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.type = 'read';
		$.query.id = $.params.id;
		Listing($, $.callback);
	});

	schema.addWorkflow('find', function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.type = 'find';
		Listing($, $.callback);
	});

	schema.addWorkflow('max', function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.type = 'max';
		$.query.scalar = $.params.attrid;
		Listing($, $.callback);
	});

	schema.addWorkflow('min', function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.type = 'min';
		$.query.scalar = $.params.attrid;
		Listing($, $.callback);
	});

	schema.addWorkflow('sum', function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.type = 'sum';
		$.query.scalar = $.params.attrid;
		Listing($, $.callback);
	});

	schema.addWorkflow('group', function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.type = 'group';
		$.query.scalar = $.params.attrid;
		Listing($, $.callback);
	});

	schema.addWorkflow('count', function($) {

		if (!MAIN.ready) {
			$.invalid(503);
			return;
		}

		$.query.type = 'count';
		Listing($, $.callback);
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

		FUNC.types_validate($, $.typeid, operation, model.body, function(err, response) {

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

		var id = model.id;
		var db = DB();
		var validated = $.validated || model.body;
		var customid;
		var fields = type.fields;

		NOW = new Date();

		// Name
		var name = model.body.name || '';
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
			builder = db.modify(type.table, validated).id(id).where('isremoved', false).callback($.done(id));

		} else {
			validated.id = customid || UID();
			validated.dtcreated = NOW;
			builder = db.insert(type.table, validated).callback($.done(validated.id));
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

		if (data && data.id)
			id = data.id;

		if (!$.user.sa && type.permissions && type.permissions.length) {
			if (!FUNC.types_permit('D', type, $.user)) {
				$.invalid('permissions');
				return;
			}
		}

		if (type) {

			var db = DB();

			await db.modify(type.table, { isremoved: true, dtremoved: NOW }).id(id).where('isremoved', false).error(404).promise($);

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

			$.success(id);

			if (PREF.changelog)
				FUNC.changelog('data_remove', { id: id }, null, $);

		} else
			$.invalid(404);
	});

	schema.addWorkflow('types', async function($) {

		if (MAIN.paused || !MAIN.ready) {
			$.invalid(503);
			return;
		}

		var items = await DB().find('tbl_type').fields('id,name,singular,color,icon,category,attrs,options').promise();

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

// Converting values
function convert(value, type) {

	if (type === undefined || type === 'string')
		return value;

	if (type === 'number' || type === 'currency')
		return value.trim().parseFloat();

	if (type === 'date' || type === 'date2') {
		value = value.trim();
		if (value.indexOf(' ') !== -1)
			return NOW.add('-' + value);
		if (value.length < 8) {
			var tmp;
			var index = value.indexOf('-');
			if (index !== -1) {
				tmp = value.split('-');
				value = NOW.getFullYear() + '-' + (tmp[0].length > 1 ? '' : '0') + tmp[0] + '-' + (tmp[1].length > 1 ? '' : '0') + tmp[1];
			} else {
				index = value.indexOf('.');
				if (index !== -1) {
					tmp = value.split('.');
					value = NOW.getFullYear() + '-' + (tmp[1].length > 1 ? '' : '0') + tmp[0] + '-' + (tmp[0].length > 1 ? '' : '0') + tmp[1];
				} else {
					index = value.indexOf(':');
					if (index !== -1) {
						// hours
					} else if (value.length <= 4) {
						value = +value;
						return value || 0;
					}
				}
			}
		}

		return value.trim().parseDate();
	}

	if (type === 'boolean')
		return value.trim().parseBoolean();

	return value;
}

// Grid filtering
function makesqlwhere(sql, type, key, value) {

	if (!value || typeof(value) !== 'string')
		return;

	var arr, val;

	// Between
	var index = value.indexOf(' - ');
	if (index !== -1) {

		arr = value.split(' - ');

		for (var i = 0, length = arr.length; i < length; i++) {
			var item = arr[i].trim();
			arr[i] = convert(item, type);
		}

		if (type === Date) {
			if (typeof(arr[0]) === 'number') {
				arr[0] = new Date(arr[0], 1, 1, 0, 0, 0);
				arr[1] = new Date(arr[1], 11, 31, 23, 59, 59);
			} else
				arr[1] = arr[1].extend('23:59:59');
		}

		sql.push('(' + key + ' BETWEEN ' + PG_ESCAPE(arr[0]) + ' AND ' + PG_ESCAPE(arr[1]) + ')');
		return;
	}

	// Multiple values
	index = value.indexOf(',');
	if (index !== -1) {

		var arr = value.split(',');

		if (type === undefined || type === 'string') {
			var tmp = [];
			for (var i = 0; i < arr.length; i++) {
				var item = arr[i].trim();
				tmp.push(key + ' ILIKE ' + PG_ESCAPE('%' + item + '%'));
			}
			sql.push('(' + tmp.join(' OR ') + ')');
			return;
		}

		for (var i = 0; i < arr.length; i++)
			arr[i] = PG_ESCAPE(convert(arr[i], type));

		sql.push('(' + key + ' IN (' + arr.join(',') + '))');
		return;
	}

	if (type === undefined || type === 'string') {
		if (value[0] === '%' || value[value.length - 1] === '%')
			sql.push(key + ' ILIKE ' + PG_ESCAPE(value));
		else
			sql.push(key + '=' + PG_ESCAPE(value));
		return;
	}

	var comparer = '=';

	switch (value[0]) {
		case '>':
		case '<':
			comparer = value[0];
			value = value.substring(1);
			break;
	}

	if (type === 'date') {

		if (value === 'yesterday')
			val = NOW.add('-1 day');
		else if (value === 'today')
			val = NOW;
		else
			val = convert(value, type);

		if (typeof(val) === 'number') {
			if (val > 1000)
				sql.push('(EXTRACT(year from ' + key + ')' + comparer + PG_ESCAPE(val) + ')');
			else
				sql.push('(EXTRACT(month from ' + key + ')' + comparer + PG_ESCAPE(val) + ')');
			return;
		}

		if (!(val instanceof Date) || !val.getTime())
			val = NOW;

		if (comparer === '=')
			sql.push('(' + key + ' BETWEEN ' + PG_ESCAPE(val.extend('00:00:00')) + ' AND ' + PG_ESCAPE(val.extend('23:59:59')) + ')');
		else
			sql.push('(' + key + comparer + PG_ESCAPE(val) + ')');
		return;
	}

	sql.push('(' + key + comparer + PG_ESCAPE(convert(value, type)) + ')');
}