const { isExcluded } = require('./excluded-items');

module.exports = function convertSaveData(gameData, saveGamePosition) {
    const buildings = [];

    gameData.gameObjects.forEach(objectType => {
        const itemName = objectType.name;

        if (isExcluded(itemName)) {
            return;
        }

        objectType.gameObjects.forEach(objInstance => {
            const bpItem = {
                buildingdef: itemName,
                offset: {
                    x: Math.floor(objInstance.position.x - saveGamePosition.x),
                    y: Math.floor(objInstance.position.y - saveGamePosition.y)
                }
            };

            const connectionObj = objInstance.behaviors.find(b => b.name === 'KAnimGraphTileVisualizer');
            if (!!connectionObj) {
                bpItem.flags = connectionObj.templateData._connections;
            }

            const orientationObj = objInstance.behaviors.find(b => b.name === 'Rotatable');
            if (!!orientationObj) {
                bpItem.orientation = orientationObj.templateData.orientation;
            }

            const elementObj = objInstance.behaviors.find(b => b.name === 'PrimaryElement');
            if (!!elementObj) {
                bpItem.selected_elements = [elementObj.templateData.ElementID];
            }

            buildings.push(bpItem);
        });
    });

    return buildings;
};
