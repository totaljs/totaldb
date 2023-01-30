// Permissions
OpenPlatform.permissions.push({ name: 'Tokens', value: 'tokens' });

NEWSCHEMA('Tokens', function(schema) {

	schema.define('id', String);
	schema.define('name', String, true);
	schema.define('token', String, true);
	schema.define('types', '[String]');
	schema.define('options', Object);

	schema.setQuery(function($) {

		if (UNAUTHORIZED($, 'tokens'))
			return;

		DB().find('tbl_token').fields('id,name,token,options,types,dtcreated,dtupdated,dtaccess').callback($.callback);
	});

	schema.setRead(function($) {

		if (UNAUTHORIZED($, 'tokens'))
			return;

		var id = $.id;
		DB().read('tbl_token').id(id).error(404).callback($.callback);
	});

	schema.setSave(function($, model) {

		if (UNAUTHORIZED($, 'tokens'))
			return;

		var db = DB();
		var done = function() {
			FUNC.tokens_load();
			$.success(model.id);
		};

		model.options = JSON.stringify(model.options);

		if (model.id) {
			model.dtupdated = NOW;
			db.update('tbl_token', model).id(model.id).error(404).done($, done);
		} else {
			model.id = UID();
			model.dtcreated = NOW;
			db.insert('tbl_token', model).done($, done);
		}

	});

	schema.setRemove(function($) {

		if (UNAUTHORIZED($, 'tokens'))
			return;

		DB().remove('tbl_token').id($.id).error(404).callback($.done());
	});

});