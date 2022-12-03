exports.install = function() {

	CORS();

	ROUTE('+GET    /', 'index');
	ROUTE('-GET    /', 'login');
	ROUTE('+GET    /logout/', logout);
	ROUTE('+GET    /docs/', docs);
	ROUTE('+GET    /docs/{id}/', docs);

	ROUTE('+POST   /internal/restore/', restore, ['upload', 60 * 1000 * 5], 1024 * 500);

	ROUTE('-POST   /internal/auth/        *Auth    --> exec');
	ROUTE('+POST   /internal/password/    *Auth    --> save');
	ROUTE('+GET    /internal/backup/      *Types   --> backup');

	ROUTE('+SOCKET /sync/', socket);

	// Types
	ROUTE('+API    /       -auth                          *Auth           --> read');
	ROUTE('+API    /       -types                         *Types          --> query');
	ROUTE('+API    /       -types_count                   *Types          --> count');
	ROUTE('+API    /       +types_save                    *Types          --> save');
	ROUTE('+API    /       -types_read/{id}               *Types          --> read');
	ROUTE('+API    /       -types_remove/{id}             *Types          --> remove');
	ROUTE('+API    /       -types_clear                   *Types          --> clear');
	ROUTE('+API    /       +types_offset                  *Types/Offset   --> save');
	ROUTE('+API    /       -cl                            *Types          --> cl');
	ROUTE('+API    /       +config_save                   *Config         --> save');
	ROUTE('+API    /       -config_read                   *Config         --> read');
	ROUTE('+API    /       -check                         *Config         --> check');
	ROUTE('+API    /       -maintenance                   *Database       --> maintenance');
	ROUTE('+API    /       -data_export/{typeid}/{id}     *Data           --> export');

	// Tokens
	ROUTE('+API    /       -tokens                        *Tokens   --> query');
	ROUTE('+API    /       +tokens_save                   *Tokens   --> save');
	ROUTE('+API    /       -tokens_read/{id}              *Tokens   --> read');
	ROUTE('+API    /       -tokens_remove/{id}            *Tokens   --> remove');

	// Public REST API
	ROUTE('+GET            /sql/                          *SQL    --> exec');
	ROUTE('+GET            /list/{typeid}/                *Data   --> query');
	ROUTE('+GET            /find/{typeid}/                *Data   --> find');
	ROUTE('+GET            /first/{typeid}/               *Data   --> first');
	ROUTE('+GET            /read/{typeid}/{id}/           *Data   --> read');
	ROUTE('+GET            /check/{typeid}/               *Data   --> exists');
	ROUTE('+POST           /save/{typeid}/                *Data   --> check save (response)');
	ROUTE('+DELETE         /remove/{typeid}/{id}/         *Data   --> remove');
	ROUTE('+GET            /count/{typeid}/               *Data   --> count');
	ROUTE('+GET            /types/                        *Data   --> types');
	ROUTE('+GET            /attrs/{typeid}/               *Data   --> attrs');

	// Public Total.js API
	ROUTE('+API   /api/    +sql                           *SQL    --> exec');
	ROUTE('+API   /api/    -list/{typeid}                 *Data   --> query');
	ROUTE('+API   /api/    -find/{typeid}                 *Data   --> find');
	ROUTE('+API   /api/    -first/{typeid}                *Data   --> first');
	ROUTE('+API   /api/    -check/{typeid}                *Data   --> exists');
	ROUTE('+API   /api/    -read/{typeid}/{id}            *Data   --> read');
	ROUTE('+API   /api/    +save/{typeid}                 *Data   --> check save (response)');
	ROUTE('+API   /api/    -remove/{typeid}/{id}          *Data   --> remove');
	ROUTE('+API   /api/    -count/{typeid}                *Data   --> count');
	ROUTE('+API   /api/    -types                         *Data   --> types');
	ROUTE('+API   /api/    +types_save                    *Types  --> save');
	ROUTE('+API   /api/    -attrs/{typeid}                *Data   --> attrs');

};

function socket() {
	var self = this;
	self.autodestroy(() => MAIN.ws = null);
	MAIN.ws = self;
}

function logout() {
	var self = this;
	EXEC('-Auth --> logout', EMPTYOBJECT, () => self.redirect('/'), self);
}

function restore() {
	EXEC('-Types --> restore', null, this.callback(), this);
}

function docs(id) {
	var items = id ? MAIN.types[id] : MAIN.types;
	if (items == null)
		this.invalid(404);
	else {

		var model;
		if (id) {
			model = {};
			model[id] = items;
		} else
			model = items;

		this.view('docs', { all: !!id, items: model });
	}
}