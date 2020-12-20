const {
    loadSaveGameFile,
    saveBlueprintData
} = require('./save-file-io');
const convertSaveGame = require('./convert-save-game-to-blueprint.js');
const convertWorldGenData = require('./convert-world-gen-data-to-blueprint.js');

const commandArg = process.argv[2];
const fileNameArg = process.argv[3];

if (!['save-data', 'world-data'].includes(commandArg)) {
    console.error('You should enter command name: `save-data` or `world-data`, depending on what you want to get.');
    console.log('You entered', commandArg);
    process.exit(1);
}

if (!fileNameArg) {
    console.error('You should enter file name (without extension) after `npm run create-blueprint` command.');
    process.exit(1);
}

const gameData = loadSaveGameFile(fileNameArg);

const saveGameData = gameData.gameObjects
    .find(obj => obj.name === 'SaveGame');

const saveGameObject = saveGameData.gameObjects[0];
const saveGamePosition = saveGameObject ? saveGameObject.position : {x: 0, y: 0, z: 0};

const buildings = commandArg === 'save-data'
    ? convertSaveGame(gameData, saveGamePosition)
    : convertWorldGenData(saveGameObject, saveGamePosition);

const blueprint = {
    friendlyname: fileNameArg,
    buildings
};

saveBlueprintData(fileNameArg, JSON.stringify(blueprint));

console.log(`File "${fileNameArg}.blueprint" is successfully saved in "blueprints" folder.`);

