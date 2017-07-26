var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Item Model
 * ==========
 */
var Item = new keystone.List('Item');

Item.add({
	type: { type: Types.Select, initial: true, required: true, options: 'None, Misc, Material, Usable, Equippable' },
	quality: { type: Types.Select, initial: true, required: true, options: 'None, Poor, Common, Uncommon, Rare, Epic, Legendary, Mythic' },
    slot: { type: Types.Select, initial: true, required: true, options: 'None, Head, Face, Ears, Neck, Shoulders, Back, Chest, Wrists, Hands, Finger, MainHand, OffHand, Belt, Pants, Feet' },
    unique: { type: Types.Boolean, initial: true },
    name: { type: Types.Text, initial: true, required: true, index: true },
    binding: { type: Types.Select, initial: true, required: true, options: 'None, Character, Account' },
    sellable: { type: Types.Boolean },
    craftable: { type: Types.Boolean },
    recipe: { type: Types.Relationship, ref: 'Ingredient', many: true },
    bonuses: { type: Types.Relationship, ref: 'Bonus', many: true },
    itemSets: { type: Types.Relationship, ref: 'ItemSet', many: true },
    minLevel: { type: Types.Number },
    availableClass: { type: Types.Relationship, ref: 'PlayerClass', many: true },
    durability: { type: Types.Number },
    upgradeSlots: { type: Types.Number },
    currencyValue: { type: Types.Number, dependsOn: { sellable: true } },
});


/**
 * Registration
 */
Item.defaultColumns = 'name, type, quality, slot';
Item.register();
