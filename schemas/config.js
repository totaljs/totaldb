// Permissions
OpenPlatform.permissions.push({ name: 'Configuration', value: 'config' });

NEWSCHEMA('Config', function(schema) {

	// Name of instance
	schema.define('name', String, true);

	// Connection string to the database
	schema.define('db', String, true);

	// A changelog URL address
	schema.define('changelog', String);

	// A secret
	schema.define('secret', String);

	schema.define('op_reqtoken', String);
	schema.define('op_restoken', String);

	schema.setRead(function($) {

		if (UNAUTHORIZED($, 'config'))
			return;

		var data = {};
		data.name = PREF.name;
		data.db = PREF.db;
		data.secret = PREF.secret;
		data.op_reqtoken = PREF.op_reqtoken;
		data.op_restoken = PREF.op_restoken;
		$.callback(data);
	});

	schema.setSave(async function($, model) {

		if (UNAUTHORIZED($, 'config'))
			return;

		PREF.set('db', model.db);
		PREF.set('name', model.name);
		PREF.set('secret', model.secret);
		PREF.set('op_reqtoken', model.op_reqtoken);
		PREF.set('op_restoken', model.op_restoken);
		FUNC.reconfigure($.done());
	});

	schema.addWorkflow('check', function($) {
		var is = !!PREF.db;
		if (is) {
			DB().check('tbl_type').callback(function(err) {
				if (err)
					$.invalid('@(Invalid DB connection)');
				else
					$.success();
			});
		} else
			$.invalid('@(DB connection is not set)');
	});

});