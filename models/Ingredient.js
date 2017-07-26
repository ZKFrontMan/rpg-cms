var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Ingredient Model
 * ==========
 */
var Ingredient = new keystone.List('Ingredient');

Ingredient.add({
    item: { type: Types.Relationship, ref: 'Item', initial: true, required: true },
    amount: { type: Types.Number, initial: true, required: true }
});


/**
 * Registration
 */
Ingredient.defaultColumns = 'item.name, amount';
Ingredient.register();
