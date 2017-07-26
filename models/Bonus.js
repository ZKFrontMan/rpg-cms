var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Bonus Model
 * ==========
 */
var Bonus = new keystone.List('Bonus');

Bonus.add({
    targetStat: { type: Types.Select, initial: true, required: true, options: 'Health, Defense, Attack, Magic' },
    amount: { type: Types.Number, initial: true, required: true }
});


/**
 * Registration
 */
Bonus.defaultColumns = 'targetStat, amount';
Bonus.register();
