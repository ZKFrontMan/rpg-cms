var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * PlayerClass Model
 * ==========
 */
var PlayerClass = new keystone.List('PlayerClass');

PlayerClass.add({
    name: { type: Types.Text, initial: true, required: true }
});


/**
 * Registration
 */
PlayerClass.defaultColumns = 'name';
PlayerClass.register();
