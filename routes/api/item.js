var keystone = require('keystone');
var Item = keystone.list('Item');

/**
 * List Items
 */
exports.list = function(req, res) {
	Item.model.find(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			items: items
		});
		
	}).populate('availableClass');
}

/**
 * Get Item by ID
 */
exports.get = function(req, res) {
	Item.model.findById(req.params.id).populate('availableClass').exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			item: item
		});
		
	});
}


/**
 * Create a Item
 */
exports.create = function(req, res) {
	
	var item = new Item.model(),
		data = (req.method == 'POST') ? req.body : req.query;
	
	item.getUpdateHandler(req).process(data, function(err) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse({
			item: item
		});
		
	});
}

/**
 * Get Item by ID
 */
exports.update = function(req, res) {
	Item.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		var data = (req.method == 'POST') ? req.body : req.query;
		
		item.getUpdateHandler(req).process(data, function(err) {
			
			if (err) return res.apiError('create error', err);
			
			res.apiResponse({
				item: item
			});
			
		});
		
	});
}

/**
 * Delete Item by ID
 */
exports.remove = function(req, res) {
	Item.model.findById(req.params.id).exec(function (err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		item.remove(function (err) {
			if (err) return res.apiError('database error', err);
			
			return res.apiResponse({
				success: true
			});
		});
		
	});
}