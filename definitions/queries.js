const COMPARER = { '=': 1, '>': 1, '<': 1, '~': 1, '>=': 1, '<=': 1, '<>': 1 };

// Converting values
function convert(type, value) {

	if (type === undefined || type === 'string')
		return value;

	// Objects are not filterable
	if (type === 'object')
		return '';

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
			arr[i] = convert(type, item);
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
			arr[i] = PG_ESCAPE(convert(type, arr[i]));

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
			val = convert(type, value);

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

	sql.push('(' + key + comparer + PG_ESCAPE(convert(type, value)) + ')');
}

function makewhere(cache, type, query) {

	if (!query.where)
		return;

	var qs = query.where.parseEncoded();
	var sql = [];

	for (var key in qs) {

		var index = key.indexOf('_');
		var val = qs[key];
		var t;

		if (index !== -1) {

			var key2 = key.substring(index + 1);
			key = key.substring(0, index);

			t = type.fields[key];
			if (!t) {
				cache.errors.push('query.where: "{0}" is not defined in the type "{1}"'.format(key, type.id));
				continue;
			}

			var attr = t.ref.fields[key2];
			if (!attr) {
				cache.errors.push('query.where: "{0}" is not defined in the type "{1}"'.format(key2, t.id));
				continue;
			}

			if (notallowed(query.user, t.id))
				continue;

			// Makes a relation
			if (!cache.join[t.typeid])
				cache.join[t.typeid] = { alias: 't' + (cache.counter++), compare: t.id };

			cache.join[t.typeid][key2] = true;
			key = cache.join[t.typeid].alias + '.' + key2;

			makesqlwhere(sql, attr.raw, key, val);

		} else {

			t = type.fields[key];

			if (!t) {
				cache.errors.push('query.where: "{0}" is not defined in the type "{1}"'.format(key, type.id));
				continue;
			}

			makesqlwhere(sql, t.raw, 't1.' + key, val);
		}

	}

	cache.filter = sql.join(' AND ');
}

function makefilter(cache, type, query) {

	if (!query.filter) {
		cache.filter = '';
		return;
	}

	var indexer = 0;
	var values = {};

	var filter = query.filter.replace(/\[[a-z_\d]+(=|\~|<|>)+.*?\]/g, function(text) {

		text = text.substring(1, text.length - 1);

		var key = '';
		var val = '';
		var comparer = '';

		for (var i = 0; i < text.length; i++) {

			var c = text[i] + text[i + 1];

			if (COMPARER[c]) {
				key = text.substring(0, i);
				comparer = text.substring(i, i + 2);
				val = text.substring(i + 2);
				break;
			}

			if (COMPARER[text[i]]) {
				key = text.substring(0, i);
				comparer = text.substring(i, i + 1);
				val = text.substring(i + 1);
				break;
			}

		}

		if (key) {

			indexer++;

			var index = key.indexOf('_');
			var key2 = index === -1 ? '' : key.substring(index + 1);

			if (index !== -1)
				key = key.substring(0, index);

			var t = type.fields[key];
			if (!t) {
				cache.errors.push('query.filter: "{0}" is undefined'.format(key));
				return '';
			}

			var datatype = null;

			if (t.typeid) {

				if (!key2)
					key2 = 'id';

				var refattr = t.ref.fields[key2];
				if (!refattr) {
					cache.errors.push('query.filter: "{0}" is not defined in the type "{1}"'.format(key, t.typeid));
					return '';
				}

				if (notallowed(query.user, t.id)) {
					// Fallback, not permitted
					values[prop] = '1=1';
					return '$' + indexer;
				}

				// Makes a relation
				if (!cache.join[t.typeid])
					cache.join[t.typeid] = { alias: 't' + (cache.counter++), compare: t.id };

				cache.join[t.typeid][key2] = true;
				datatype = refattr;
				key = cache.join[t.typeid].alias + '.' + key2;
			} else {
				datatype = t;
				key = 't1.' + key;
			}

			val = PG_ESCAPE(convert(datatype, val));

			var prop = '' + indexer;

			if (comparer === '~')
				values[prop] = key + ' ILIKE ' + val;
			else
				values[prop] = key + comparer + val;

			return '$' + indexer;

		} else {
			cache.errors.push('query.filter: "{0}" invalid value'.format(text));
			return '';
		}

	});

	filter = filter.replace(/\s(and|or)\s/ig, text => (/and/i).test(text) ? ' \0 ' : ' \1 ');

	if ((/[a-z]+/i).test(filter)) {
		cache.errors.push('query.filter: The filter contains not allowed characters');
		return;
	}

	cache.filter = filter.replace(/\0/g, 'AND').replace(/\1/g, 'OR').replace(/\$\d+/g, text => values[text.substring(1)] || '');
}

function makefields(cache, type, query) {

	var reverse = null;
	var tmp;

	// Rerverse
	if (query.fields && query.fields[0] === '-') {
		var arr = query.fields.split(',');
		reverse = {};
		for (var a of arr)
			reverse[a.substring(1)] = 1;
		query.fields = '';
	}

	if (query.group && !query.fields)
		query.fields = query.group;

	if (!query.fields) {
		// all
		query.fields = '';
		for (var k in type.fields) {

			var field = type.fields[k];
			if (field.ref && query.expand) {

				if (notallowed(query.user, field.typeid))
					continue;

				for (var sk in field.ref.fields) {
					tmp = k + (field.typeid ? ('_' + field.ref.fields[sk].id) : '');
					if (!reverse || !reverse[tmp])
						query.fields += (query.fields ? ',' : '') + tmp;
				}
			} else {

				if (field.typeid) {
					if (notallowed(query.user, field.typeid))
						continue;
				}

				tmp = k + (field.typeid ? '_name' : '');

				if (!reverse || !reverse[tmp])
					query.fields += (query.fields ? ',' : '') + tmp;

				if (field.typeid) {
					tmp = k + (field.typeid ? '_id' : '');
					if (!reverse || !reverse[tmp])
						query.fields += (query.fields ? ',' : '') + tmp;
				}
			}
		}
	}

	var groups;
	var fields = query.fields.split(',');
	var attr;
	var check = {};
	var group = query.group ? query.group.split(',').trim() : null;
	var index;
	var key2;
	var alias;

	if (group) {
		groups = {};
		for (var key of group) {

			index = key.indexOf('_');

			if (index !== -1) {

				key2 = key.substring(index + 1);
				tmp = key.substring(0, index);
				attr = type.fields[tmp];

				if (!attr) {
					cache.errors.push('query.group: "{0}" is not defined in the type "{1}"'.format(tmp, type.id));
					continue;
				}

				var refattr = attr.ref.fields[key2];
				if (!refattr) {
					cache.errors.push('query.group: "{0}" is not defined in the type "{1}"'.format(key2, attr.typeid));
					continue;
				}

				if (notallowed(query.user, attr.typeid))
					continue;

				groups[tmp] = 1;

				// Makes a relation
				if (!cache.join[attr.ref.id])
					cache.join[attr.ref.id] = { alias: 't' + (cache.counter++), compare: attr.id };

				cache.group.push(cache.join[attr.ref.id] + '.' + key2);

			} else {
				groups[key] = 1;
				attr = type.fields[key];
				cache.group.push('t1.' + key);
				if (!attr)
					cache.errors.push('query.group: "{0}" is not defined in the type "{1}"'.format(key, type.id));
			}
		}
	}

	for (var key of fields) {

		var scalar = '';

		index = key.indexOf('(');
		if (index !== -1) {

			if (!group) {
				cache.errors.push('query.fields: "{0}" must be used only with query.group'.format(key));
				continue;
			}

			scalar = key.substring(0, index).toUpperCase();
			key = key.substring(index + 1, key.length - 1);
			console.log('===>', scalar, key);
		}

		index = key.indexOf('_');
		if (index !== -1) {

			key2 = key.substring(index + 1);
			tmp = key.substring(0, index);
			attr = type.fields[tmp];

			if (!scalar && groups && !groups[tmp]) {
				cache.errors.push('query.fields: "{0}" is not included in the query.group'.format(tmp));
				continue;
			}

			if (!attr) {
				cache.errors.push('query.fields: "{0}" is not defined in the type "{1}"'.format(tmp, type.id));
				continue;
			}

			var refattr = attr.ref.fields[key2];
			if (!refattr) {
				cache.errors.push('query.fields: "{0}" is not defined in the type "{1}"'.format(key2, attr.typeid));
				continue;
			}

			if (notallowed(query.user, attr.typeid))
				continue;

			// Makes a relation
			if (!cache.join[attr.ref.id])
				cache.join[attr.ref.id] = { alias: 't' + (cache.counter++), compare: attr.id };

			alias = cache.join[attr.ref.id].alias;

			if (scalar) {
				var retype = scalar === 'COUNT' || refattr.raw === 'number' ? '::numeric' : '';
				cache.fields.push(scalar + '(' + alias + '.' + key2 + ')' + retype + ' AS ' + key);
			} else
				cache.fields.push(alias + '.' + key2 + ' AS ' + key);

			cache.map[key] = [tmp, key2];

			if (!check[tmp])
				check[tmp] = [alias, attr.ref.id];

		} else {

			attr = type.fields[key];
			console.log('--->', scalar, groups, key);

			if (!scalar && groups && !groups[key]) {
				cache.errors.push('query.fields: "{0}" is not included in the query.group'.format(key));
				continue;
			}

			if (attr) {
				if (scalar) {
					var retype = scalar === 'COUNT' || attr.raw === 'number' ? '::numeric' : '';
					cache.fields.push(scalar + '(t1.' + key + ')' + retype + ' AS ' + key);
				} else {

					if (attr.ref) {
						fields.push(key + '_name', key + '_id');
						continue;
					}

					cache.fields.push('t1.' + key);
				}
			} else
				cache.errors.push('query.fields: "{0}" is not defined in the type "{1}"'.format(key, type.id));
		}
	}

	// Add default fields
	for (var key in check) {

		if (!cache.map[key + '_id']) {
			cache.map[key + '_id'] = [key, 'id'];
			cache.fields.push(check[key][0] + '.id AS ' + key + '_id');
		}

		if (!cache.map[key + '_typeid']) {
			cache.map[key + '_typeid'] = [key, 'typeid'];
			cache.fields.push('\'' + check[key][1] + '\' AS ' + key + '_typeid');
		}
	}

}

function makesort(cache, type, query) {

	if (!query.sort)
		return;

	var sortfields = query.sort.split(',');
	var attr;

	for (var sort of sortfields) {

		var arr = sort.split(' ');

		arr[1] = (arr[1] || '').toUpperCase();

		switch (arr[1]) {
			case 'ASC':
			case 'DESC':
				break;
			default:
				arr[1] = 'ASC';
				break;
		}

		var key = arr[0];
		var index = key.indexOf('_');

		if (index !== -1) {

			var tmp = key.substring(0, index);
			var key2 = key.substring(index + 1);

			attr = type.fields[tmp];

			if (!attr) {
				cache.errors.push('query.sort: "{0}" is not defined in the type "{1}"'.format(tmp, type.id));
				continue;
			}

			var refattr = attr.ref.fields[key2];
			if (!refattr) {
				cache.errors.push('query.sort: "{0}" is not defined in the type "{1}"'.format(key, attr.ref.id));
				continue;
			}

			if (type.ref && notallowed(query.user, type.ref.id))
				continue;

			// Makes a relation
			if (!cache.join[attr.ref.id])
				cache.join[attr.ref.id] = { alias: 't' + (cache.counter++), compare: attr.id };

			cache.sort.push(cache.join[attr.ref.id].alias + '.' + key2 + ' ' + arr[1]);
			cache.map[key] = [tmp, key2];

		} else {
			attr = type.fields[key];
			if (attr)
				cache.sort.push('t1.' + key + ' ' + arr[1]);
			else
				cache.errors.push('query.sort: "{0}" is not defined in the type "{1}"'.format(key, type.id));
		}
	}
}

function makequery(name, query) {

	var type = MAIN.types[name];
	var cache = {};

	cache.counter = 2;
	cache.join = {};
	cache.map = {};
	cache.errors = [];
	cache.fields = [];
	cache.sort = [];
	cache.typeid = name;
	cache.type = type;
	cache.group = [];

	if (type) {

		if (query.command !== 'count')
			makefields(cache, type, query);

		if (query.where)
			makewhere(cache, type, query);
		else if (query.filter)
			makefilter(cache, type, query);

		if (query.command !== 'count')
			makesort(cache, type, query);

	} else
		cache.errors.push('Type "{0}" not found'.format(name));

	return cache;
}

function notallowed(user, typeid) {
	if (!user.sa && (user.types && user.types.length && !user.types.includes(typeid)))
		return true;
}

FUNC.makequery = async function(query, callback) {

	// query.fields  = 'id,COUNT(dtcreated)';
	// query.filter  = '[name=Skúšobný] AND [attr14_name~%Total%] OR ([attr12=123456] OR [attr7_name=Reject])';
	// query.where   = 'name=%25Skúšobný%25&attr14_name=%25Total%25';
	// query.filter  = '[name=Skúšobný] AND [attr14_name~%Total%]';
	// query.group   = 'id';
	// query.sort    = 'attr14_name ASC';
	// query.command = 'find';
	// query.typeid  = 'type3434';
	// query.expand  = '1';
	// query.user    = {Object}

	if (notallowed(query.user, query.typeid)) {
		callback(['Invalid permissions']);
		return;
	}

	var parsed = makequery(query.typeid, query);

	if (parsed.errors.length) {
		callback(parsed.errors);
		return;
	}

	var joins = [];

	for (var key in parsed.join) {
		var join = parsed.join[key];
		joins.push('LEFT JOIN tbl_' + key + ' ' + join.alias + ' ON ' + join.alias + '.id=t1.' + join.compare);
	}

	if (query.command === 'detail') {
		if (parsed.filter)
			parsed.filter = 't1.id=' + PG_ESCAPE(query.id || null) + ' AND ' + parsed.filter;
		else
			parsed.filter = 't1.id=' + PG_ESCAPE(query.id || null);
	}

	parsed.filter = 't1.isremoved=FALSE' + (parsed.filter ? (' AND ' + parsed.filter) : '');

	var fields = parsed.fields.join(',');
	var where = parsed.filter ? (' WHERE ' + parsed.filter) : '';
	var join = joins.length ? (' ' + joins.join(' ')) : '';
	var sort = parsed.sort.length ? (' ORDER BY ' + parsed.sort.join(' ')) : '';
	var offset = '';
	var response;
	var groupby = parsed.group.length ? (' GROUP BY ' + parsed.group.join(', ')) : '';
	var db = DB();

	if (!groupby && !sort && (query.command === 'find' || query.command === 'list'))
		sort = ' ORDER BY t1.dtcreated DESC';

	query.page = query.page ? U.parseInt(query.page) : 1;
	query.limit = query.limit ? U.parseInt(query.limit) : 100;

	if (query.limit > 5000)
		query.limit = 5000;

	var take = query.limit;
	var skip = (query.page - 1) * take;
	var items;

	if (take && skip)
		offset += ' LIMIT ' + take + ' OFFSET ' + skip;
	else if (query.take)
		offset += ' LIMIT ' + take;
	else if (skip)
		offset += ' OFFSET ' + skip;

	if (query.command === 'list') {
		var count = await db.query('SELECT COUNT(1)::int4 AS count FROM ' + parsed.type.table + ' t1' + join + where + groupby).promise();
		items = await db.query('SELECT ' + fields + ' FROM ' + parsed.type.table + ' t1' + join + where + groupby + sort + offset).promise();
		response = {};
		response.limit = query.limit;
		response.count = count[0].count;
		response.pages = Math.ceil(response.count / query.limit);
		response.page = query.page;
		response.items = items;
	} else if (query.command === 'find') {
		items = await db.query('SELECT ' + fields + ' FROM ' + parsed.type.table + ' t1' + join + where + groupby + sort + offset).promise();
		response = items;
	} else if (query.command === 'read') {
		items = await db.query('SELECT ' + fields + ' FROM ' + parsed.type.table + ' t1' + join + where + groupby + sort + ' LIMIT 1').promise();
		response = items[0] || null;
	} else if (query.command === 'check') {
		items = await db.query('SELECT ' + fields + ' FROM ' + parsed.type.table + ' t1' + join + where + groupby + sort + ' LIMIT 1').promise();
		response = items[0] ? items[0].id : null;
	} else if (query.command === 'key') {
		items = await db.query('SELECT ' + fields + ' FROM ' + parsed.type.table + ' t1' + join + where + groupby + sort + ' LIMIT 1').promise();
		response = items[0] ? items[0].id : null;
	} else if (query.command === 'detail') {
		items = await db.query('SELECT ' + fields + ' FROM ' + parsed.type.table + ' t1' + join + where + groupby + sort + ' LIMIT 1').promise();
		response = items[0] || null;
	} else if (query.command === 'count') {
		items = await db.query('SELECT COUNT(1)::int4 AS count FROM ' + parsed.type.table + ' t1' + join + where + groupby + sort + ' LIMIT 1').promise();
		response = items[0].count;
	}
	if (parsed.map && items instanceof Array) {
		for (var item of items) {
			for (var key in item) {
				var map = parsed.map[key];
				if (map) {
					if (!item[map[0]])
						item[map[0]] = {};
					item[map[0]][map[1]] = item[key];
					delete item[key];
				}
			}
		}
	}

	callback(null, response);
};