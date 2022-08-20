const SKIP = { id: 1, name: 1, search: 1, permissions: 1, isremoved: 1, dtcreated: 1, dtupdated: 1, dtremoved: 1 };

function makepgtype(type) {
	switch (type) {
		case 'date':
			return 'TIMESTAMP';
		case 'date2':
			return 'DATE';
		case 'number':
		case 'currency':
			return 'NUMERIC';
		case 'boolean':
			return 'BOOLEAN';
		case 'object':
			return 'JSON';
	}
	return 'TEXT';
}

FUNC.pg_check = async function(type, callback) {

	var db = DB();
	var columns = await db.query('SELECT "column_name" as id, UPPER("data_type") as type FROM information_schema.columns WHERE table_schema = \'public\' AND table_name=\'tbl_{0}\''.format(type.id)).promise();
	var sql = [];
	var comments = [];

	if (columns.length) {

		var processed = {};

		for (var col of columns) {

			if (SKIP[col.id])
				continue;

			var t = type.attrs.findItem('id', col.id);
			if (t) {

				var index = col.type.indexOf(' ');
				if (index !== -1)
					col.type = col.type.substring(0, index);

				var pgtype = makepgtype(t.type);

				if (col.type !== pgtype)
					sql.push('ALTER TABLE tbl_{0} ALTER COLUMN {1} TYPE {2} USING ({1}::{2})'.format(type.id, t.id, pgtype));

				comments.push('COMMENT ON COLUMN "public"."tbl_{0}"."{1}" IS {2}'.format(type.id, t.id, PG_ESCAPE(t.name)));

			} else {
				// create
				sql.push('ALTER TABLE tbl_{0} DROP COLUMN {1}'.format(type.id, col.id));
			}

			processed[col.id] = 1;
		}

		// Add missing fields
		for (var t of type.attrs) {
			if (!processed[t.id]) {
				sql.push('ALTER TABLE tbl_{0} ADD COLUMN {1} {2}'.format(type.id, t.id, makepgtype(t.type)));
				comments.push('COMMENT ON COLUMN "public"."tbl_{0}"."{1}" IS {2}'.format(type.id, t.id, PG_ESCAPE(t.name)));
			}
		}

	} else {
		// Creates table
		var builder = [];

		builder.push('id TEXT, name TEXT, search TEXT, permissions _TEXT, isremoved BOOLEAN DEFAULT false, dtcreated TIMESTAMP DEFAULT NOW(), dtupdated TIMESTAMP, dtremoved TIMESTAMP');

		for (var attr of type.attrs)
			builder.push(attr.id + ' ' + makepgtype(attr.type));

		sql.push('CREATE TABLE tbl_{0} ('.format(type.id) + builder.join(', ') + ', PRIMARY KEY (id))');
	}

	var done = function() {
		comments.length && db.query(comments.join(';\n'));
		callback && callback();
	};

	if (sql.length)
		db.query(sql.join(';\n') + ';').callback(done);
	else
		done();

};

FUNC.reconfigure = function(callback) {

	if (!PREF.db) {
		callback && callback('Database is not initialized');
		return;
	}

	MAIN.ready = false;

	require('querybuilderpg').init('default', PREF.db, PREF.pools || 0);

	// check DB
	var db = DB();
	db.query('SELECT table_name AS id FROM information_schema.tables WHERE table_schema=\'public\'').callback(function(err, response) {

		if (err) {
			callback && callback(err);
			return;
		}

		var type = response.findItem('id', 'tbl_type');
		if (type) {
			MAIN.ready = true;
			FUNC.types_load();
			FUNC.tokens_load();
			callback && callback();
			return;
		}

		F.Fs.readFile(PATH.private('init.sql'), function(err, response) {
			DB().query(response.toString('utf8')).callback(function(err) {
				if (!err) {
					FUNC.types_load();
					FUNC.tokens_load();
					MAIN.ready = true;
				}
				callback && callback(err);
			});
		});

	});
};

FUNC.changelog = function(type, data, insert, $) {

	if (PREF.changelog) {
		var data = {};
		data.type = type;
		data.data = data;

		if (insert != null)
			data.insert = insert;

		data.user = $.user;
		RESTBuilder.POST(PREF.changelog, data).keepalive().callback(ERROR('Changelog'));
	}

};

ON('ready', function() {
	FUNC.reconfigure();
});