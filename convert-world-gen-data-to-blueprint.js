const { isExcluded } = require('./excluded-items');

module.exports = function convertWorldData(saveGameObject, saveGamePosition) {
    const worldGenSpawnObj = saveGameObject.behaviors.find(behavior => behavior.name === 'WorldGenSpawner');
    const spawnInfos = worldGenSpawnObj.templateData.spawnInfos;
    const buildings = [];

    spawnInfos.forEach(spawn => {
        const itemName = spawn.id.replace('POI', '');

        if (isExcluded(itemName)) {
            return;
        }

        const bpItem = {
            buildingdef: itemName,
            offset: {
                x: Math.floor(spawn.location_x - saveGamePosition.x),
                y: Math.floor(spawn.location_y - saveGamePosition.y)
            },
            orientation: spawn.rotationOrientation,
            "selected_elements": [spawn.element]
        };

        buildings.push(bpItem);
    });

    return buildings;
};
