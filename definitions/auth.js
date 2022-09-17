var BLACKLIST = {};

AUTH(function($) {

	if (BLACKLIST[$.ip] > 15) {
		$.invalid();
		return;
	}

	if ($.url !== '/') {
		var token = $.headers['x-token'] || $.req.query.token;
		if (token) {
			token = MAIN.tokens[token];
			if (token) {

				if ($.websocket && !token.options.iswebsocket) {
					BLACKLIST[$.ip] = (BLACKLIST[$.ip] || 0) + 1;
					$.invalid();
					return;
				}

				var user = {};
				user.id = $.headers['x-user'];
				user.token = token.name;
				user.types = token.types;
				user.options = token.options;
				user.permissions = ($.headers['x-permissions'] || '').split(',');
				// user.permissions.unshift(user.id);

				// #groupname, @rolename, !permission
				user.sa = false;
				$.success(user);
				return;
			}
		}
	}

	var token = $.cookie(CONF.cookie);
	if (token) {
		var session = DECRYPTREQ($.req, token, CONF.cookie_secret);
		if (session && session.id === PREF.user.id && session.expire > NOW) {
			$.success({ sa: true });
			return;
		} else
			BLACKLIST[$.ip] = (BLACKLIST[$.ip] || 0) + 1;
	}

	$.invalid();
});

if (!PREF.user) {
	var password = GUID(10);
	PREF.set('Total DB');
	PREF.set('user', { id: UID(), login: GUID(10), password: password.sha256(CONF.cookie_secret), raw: password });
	PREF.set('secret', GUID(10));
}

ON('service', function(counter) {
	if (counter % 15 === 0)
		BLACKLIST = {};
});