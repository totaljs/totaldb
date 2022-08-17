NEWSCHEMA('Database', function(schema) {

	schema.addWorkflow('maintenance', function($) {

		var db = DB();

		for (var key in MAIN.types) {
			var type = MAIN.types[key];
			db.query('DELETE FROM {0} WHERE isremoved=TRUE'.format(type.table));
		}

		db.query('VACUUM FULL');
		db.callback($.done());
	});

});