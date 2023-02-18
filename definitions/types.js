FUNC.tokens_load = async function() {

	if (!MAIN.ready)
		return;

	var tokens = await DB().query('SELECT id,token,name,types,options FROM {0}tbl_token'.format(MAIN.schema).promise();
	var formatted = {};

	for (var item of tokens) {

		if (item.types && item.types.length) {
			var tmp = {};
			for (var m of item.types)
				tmp[m] = 1;
			item.types = tmp;
		} else
			item.types = null;

		formatted[item.token] = item;
	}

	MAIN.tokens = formatted;
};

FUNC.types_load = function(callback) {

	if (!MAIN.ready) {
		callback && callback();
		return;
	}

	F.Fs.readFile(PATH.private('types.json'), async function(err, response) {

		var datatypes = response.toString('utf8').parseJSON(true);
		var types = await DB().find('tbl_type').promise();
		var meta = {};

		MAPSCHEMA('Attr.type')(datatypes);
		MAIN.paused = true;
		MAIN.datatypes = datatypes;

		types.wait(function(type, next) {
			FUNC.pg_check(type, function(err) {
				if (err) {
					// some DB error, skip
					console.error('DB ERROR: {id} ({name})'.arg(type), err);
					next();
				} else {
					type.table = type.id;
					FUNC.types_configure(type);
					meta[type.id] = type;
					next();
				}
			});
		}, function() {

			var check = [];

			// Check relations
			for (var type of types) {
				var remove = [];
				for (var attr of type.attrs) {
					if (attr.type === 'type') {
						var target = meta[attr.typeid];
						if (!target)
							remove.push(attr);
					}
				}

				if (remove.length) {
					for (var attr of remove) {
						var index = type.attrs.indexOf(attr);
						type.attrs.splice(index, 1);
					}
					check.push(type);
				}
			}

			check.wait(function(item, next) {

				FUNC.pg_check(type, function(err) {
					if (err) {
						// some DB error, skip
						console.error('DB ERORR: {id} ({name})'.arg(type), err);
						next();
					}
					next();
				});

			}, function() {

				for (var key in meta) {
					var type = meta[key];
					for (var attr of type.attrs) {
						if (attr.typeid)
							attr.ref = meta[attr.typeid];
					}
				}

				MAIN.types = meta;
				MAIN.paused = false;
				callback && callback();
			});

		});
	});
};

FUNC.types_configure = function(type) {

	// Remap
	type.fields = {};
	for (var attr of type.attrs)
		type.fields[attr.id] = attr;

	type.fields.id = { id: 'id', name: 'ID', type: 'string' };
	type.fields.name = { id: 'name', type: 'string', name: 'Name', required: true };
	type.fields.dtcreated = { id: 'dtcreated', name: 'Created', type: 'date' };
	type.fields.dtupdated = { id: 'dtupdated', name: 'Updated', type: 'date' };

	type.attrs.push(type.fields.id);
	type.attrs.push(type.fields.name);
	type.attrs.push(type.fields.dtcreated);
	type.attrs.push(type.fields.dtupdated);

	// Default values + validation
	for (var item of type.attrs) {

		var t = MAIN.datatypes.findItem('id', item.type);
		item.raw = t ? t.type : 'string';
		item.datatype = t;

		if (item.default) {
			try {
				item.default = new Function('return ' + item.default);
			} catch (e) {
				item.default = null;
			}
		}

		if (item.validate) {
			try {
				item.validate = new Function(item.validate);
			} catch (e) {
				item.validate = null;
			}
		}
	}

};

function preparenumber(val, max, min, float) {

	if (val == null)
		return null;

	switch (typeof(val)) {
		case 'string':
			val = float ? val.parseFloat() : val.parseInt();
			break;
		case 'number':
			break;
		default:
			return null;
	}

	if (max != null && val > max)
		return null;

	if (min != null && val < min)
		return null;

	return val;
}

FUNC.types_prepare = async function(item, val, err, parent) {

	var path = (parent ? (parent + '.') : '') + item.name;
	var error = { name: item.name, path: path, error: (item.error || 'Value of "{0}" is invalid').format(item.name) };
	var isdef = false;
	var tmp;

	switch (item.type) {

		case 'type':

			var exists = false;
			var type = MAIN.types[item.typeid];

			if (val == null && item.default) {
				try {
					val = item.default();
				} catch (e) {
					val = '';
				}
			}

			if (type && val)
				exists = await DB().one(type.table).id(val).where('isremoved', false).promise();

			if (item.required && !exists)
				err.push(error);

			return exists ? val : null;

		case 'logo':
		case 'photo':
		case 'file':
		case 'color':
		case 'icon':
		case 'html':
		case 'string':
		case 'upper':
		case 'lower':
		case 'capitalize':
		case 'email':
		case 'phone':
		case 'zip':
		case 'base64':
		case 'url':
		case 'json':
		case 'uid':
		case 'guid':
		case 'name':
		case 'password':
		case 'multiline':

			if (val == null) {
				if (item.default) {
					isdef = true;
					try {
						val = item.default && item.default();
					} catch(e)  {
						val = '';
					}
				} else
					val = '';
			} else
				val += '';

			if (item.type !== 'multiline' && item.type !== 'json' && item.type !== 'html')
				val = val.replace(/\n|\r/g, ' ').trim();

			if (!isdef) {
				switch (item.type) {
					case 'upper':
						return val.toUpperCase();
					case 'lower':
						return val.toLowerCase();
					case 'capitalize':
						return val.capitalize();
					case 'phone':
						val = val.replace(/\s|\.|-|\(|\)/g, '');
						break;
					case 'name':
						val = toName(val);
						break;
					case 'password':
						val = val.sha256(PREF.secret);
						break;
				}
			}

			if (item.max && val.length > item.max)
				val = val.substring(0, item.max);

			if (!isdef && item.required) {
				if (item.validate) {
					tmp = item.validate(val);
					if (tmp === false)
						tmp = error;
					if (typeof(tmp) === 'string')
						err.push(tmp);
				} else {

					switch (item.type) {
						case 'email':
							if (!val.isEmail())
								val = '';
							break;

						case 'phone':
							if (!val.isPhone())
								val = '';
							break;

						case 'zip':
							if (!val.isZIP())
								val = '';
							break;

						case 'url':
							if (!val.isURL())
								val = '';
							break;

						case 'json':
							if (!val.isJSON())
								val = '';
							break;

						case 'uid':
							if (!val.isUID())
								val = '';
							break;

						case 'base64':
							if (!val.isBase64())
								val = '';
							break;

						case 'guid':
							if (!val.isGUID())
								val = '';
							break;
					}

					if (!val)
						err.push(error);
				}
			}

			return val;

		case 'boolean':

			if (val == null) {
				if (item.default) {
					try {
						val = item.default && item.default();
					} catch(e)  {
						val = false;
					}
				} else
					val = false;
				return val;
			}

			return val == true || val === 'on' || val === 'true' || val == 1;

		case 'date':
		case 'date2':

			if (val) {

				if (val instanceof Date)
					return val;

				switch (typeof(val)) {
					case 'string':
					case 'number':
						val = val.parseDate();
						break;
				}

				if (!(val instanceof Date))
					val = null;

			} else {
				if (item.default) {
					try {
						val = item.default && item.default();
					} catch(e)  {
						val = null;
					}
				} else
					val = null;
			}

			if (item.required && !val)
				err.push(error);

			return null;

		case 'object':

			if (val == null) {
				if (item.default) {
					try {
						val = item.default();
					} catch(e)  {
						val = null;
					}
				} else
					val = null;
			}

			return JSON.stringify(val);

		case 'number':
		case 'currency':
		case 'float':

			val = preparenumber(val, null, true);

			if (val == null && item.default) {
				try {
					val = item.default();
				} catch (e) {
					val = null;
				}
			}

			if (item.required && val == null)
				err.push(error);

			return val || 0;

		case 'integer':

			var max = 2147483647;
			val = preparenumber(val, max, -max);

			if (val == null && item.default) {
				try {
					val = item.default();
				} catch (e) {
					val = null;
				}
			}

			if (item.required && val == null)
				err.push(error);

			return val || 0;

		case 'smallint':

			var max = 32768;
			val = preparenumber(val, max, -max);

			if (val == null && item.default) {
				try {
					val = item.default();
				} catch (e) {
					val = null;
				}
			}

			if (item.required && val == null)
				err.push(error);

			return val || 0;

		case 'tinyint':
			val = preparenumber(val, 255, 0);

			if (val == null && item.default) {
				try {
					val = item.default();
				} catch (e) {
					val = null;
				}
			}

			if (item.required && val == null)
				err.push(error);

			return val || 0;
	}
};

FUNC.types_validate = async function($, typeid, operation, model, callback) {

	var type = MAIN.types[typeid];
	if (!type) {
		callback && callback([{ error: 'Type "{0}" doesn\'t exist'.format(typeid) }]);
		return;
	}

	if (!$.user.sa && type.permissions && type.permissions.length) {
		if (!FUNC.types_permit(operation, type, $.user)) {
			callback && callback([{ name: 'permissions', error: '401' }]);
			return;
		}
	}

	var output = {};
	var errors = [];
	var fields = type.fields;
	var keys = {};

	for (var k in model) {

		var key = k;
		var value = model[key];

		switch (key[0]) {
			case '+':
			case '-':
			case '*':
			case '/':
			case '!':
			case '>':
			case '<':
				key = key.substring(1);
				break;
		}

		if (!fields[key])
			continue;

		keys[key] = 1;

		var field = fields[key];
		var valid = null;

		if (field.array) {

			if (value instanceof Array) {
				var arr = [];

				for (var item of value) {
					valid = await FUNC.types_prepare(field, item, errors, null, false);
					if (valid)
						arr.push(valid);
				}

				valid = arr;

			} else {
				var error = { name: field.name, path: field.name, error: field.error || 'Value must be array' };
				errors.push(error);
			}

		} else
			valid = await FUNC.types_prepare(field, value, errors, null, false);

		output[k] = valid;
	}

	if (!type.options.ispartial) {
		for (var k in fields) {
			if (k !== 'dtupdated' && k !== 'dtcreated' && k !== 'id' && !keys[k]) {
				var item = fields[k];
				errors.push({ name: item.name, path: item.id, error: (item.error || 'Value of "{0}" is invalid').format(item.name) });
			}
		}
	}

	// Cleanup
	if (errors.length)
		output = null;
	else
		errors = null;

	// Response
	callback && callback(errors, output);
};

FUNC.types_permit = function(operation, type, user) {

	// Allowed operations:
	// "C" create
	// "R" read
	// "U" update
	// "D" delete

	if (type.permissions.length) {
		for (var a of type.permissions) {
			for (var b of user.permissions)
				if (a === (operation + b))
					return true;
		}
		return false;
	}

	return true;
};

function toName(val) {

	var a = '';
	var p = 0;
	var space = false;

	for (var i = 0; i < val.length; i++) {
		var c = val.charCodeAt(i);
		if ((c < 65 || (c > 90 && c < 97) || (c > 122 && c < 128)) && c !== 32)
			continue;

		if (a && p !== 32) {

			if (c === 32) {
				p = c;
				space = true;
				continue;
			}

			if (space) {
				a += ' ';
				space = false;
			}

			a += val[i];

		} else {

			if (space) {
				a += ' ';
				space = false;
			}

			a += val[i].toUpperCase();
		}

		p = c;
	}

	return a;
}
