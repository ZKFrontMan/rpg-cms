var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);

	app.get('/api/item/list', keystone.middleware.api, routes.api.item.list);
	app.all('/api/item/create', keystone.middleware.api, routes.api.item.create);
	app.get('/api/item/:id', keystone.middleware.api, routes.api.item.get);
	app.get('/api/item/:id/update', keystone.middleware.api, routes.api.item.update);
	app.get('/api/item/:id/remove', keystone.middleware.api, routes.api.item.remove);
};
