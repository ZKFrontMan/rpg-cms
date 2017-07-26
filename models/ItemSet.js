var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * ItemSet Model
 * ==========
 */
var ItemSet = new keystone.List('ItemSet');

ItemSet.add({
    name: { type: Types.Text, required: true },
    bonuses: { type: Types.Relationship, ref: 'Bonus', many: true }
});


/**
 * Registration
 */
ItemSet.defaultColumns = 'name, bonuses';
ItemSet.register();
