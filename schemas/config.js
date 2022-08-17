NEWSCHEMA('Config', function(schema) {

	// Name of instance
	schema.define('name', String, true);

	// Connection string to the database
	schema.define('db', String, true);

	// A changelog URL address
	schema.define('changelog', String);

	// A secret
	schema.define('secret', String);

	schema.setRead(function($) {
		var data = {};
		data.name = PREF.name;
		data.db = PREF.db;
		data.secret = PREF.secret;
		$.callback(data);
	});

	schema.setSave(async function($, model) {
		PREF.set('db', model.db);
		PREF.set('name', model.name);
		PREF.set('secret', model.secret);
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