NEWSCHEMA('SQL', function(schema) {

	schema.define('query', String, true);
	schema.define('params', '[Object]');

	schema.action('exec', {
		action: function($, model) {

			if (!$.user.sa && (!$.user.options || !$.user.options.sql)) {
				$.invalid('permissions');
				return;
			}

			var strip = model.query.replace(/'.*?'/g, '');

			if ((/(drop|truncate|tbl_token|tbl_type\s|user|pg|exec|vacuum|create|alter)/i).test(strip)) {
				$.invalid('permissions');
				return;
			}

			DB().query('default', model.query, model.params).callback($.callback);
		}
	});

});