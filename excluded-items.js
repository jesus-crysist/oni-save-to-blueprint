const excludedItems = [
    'SaveGame', 'LightBug', 'Oxyfern',
    'Squirrel', 'Minion', 'MinionAssignablesProxy',
    'BunkerExteriorDoor', 'DoorInternal', 'FacilityDoor',
    'SlimeMold', 'GoldAmalgam', 'Algae', 'SedimentaryRock', 'Obsidian', 'IgneousRock',
    'Phosphorite', 'Mushroom', 'Cuprite', 'Aluminum', 'Gold',
    'LightBug', 'Ceramic',
    'Oxyfern', 'SwampLily', 'SpiceVine', 'SeaLettuce',
    'Drecko', 'Crab', 'Pacu', 'Mole', 'Puft', 'EvilFlower', 'EvilFlowerSeed', 'Glom',
    'OilWell', 'OilFloater',
    'Squirrel', 'ForestTreeBranch', 'Minion', 'MinionAssignablesProxy',
    'GeneShuffler', 'SetLocker', 'Hatch', 'Dirt', 'AluminumOre', 'Salt', 'DigPlacer', 'Granite',
    'Iron', 'Regolith', 'Clay', 'FieldRation', 'WoodLog', 'BasicFabric', 'Lime', 'BleachStone',
    'OxyRock',
];

function isExcluded(itemName) {
    return excludedItems.includes(itemName) ||
        itemName.indexOf('Prop') !== -1 ||
        itemName.toLowerCase().indexOf('seed') !== -1 ||
        itemName.indexOf('Plant') !== -1 ||
        itemName.indexOf('Tree') !== -1 ||
        itemName.toLowerCase().indexOf('geyser') !== -1 ||
        itemName.toLowerCase().indexOf('egg') !== -1 ||
        (itemName.toLowerCase().indexOf('water') !== -1 && itemName !== 'WaterPurifier') ||
        itemName.toLowerCase().indexOf('baby') !== -1 ||
        itemName.toLowerCase().indexOf('underconstruction') !== -1 ||
        itemName.toLowerCase().indexOf('sand') !== -1 ||
        itemName.toLowerCase().indexOf('puft') !== -1 ||
        itemName.toLowerCase().indexOf('meat') !== -1 ||
        itemName.toLowerCase().indexOf('crab') !== -1 ||
        itemName.toLowerCase().indexOf('pacu') !== -1 ||
        itemName.toLowerCase().indexOf('placer') !== -1 ||
        (itemName.toLowerCase().indexOf('carbon') !== -1 && itemName !== 'CarbonSkimmer') ||
        itemName.toLowerCase().indexOf('comet') !== -1
}

module.exports = {
    isExcluded
};
