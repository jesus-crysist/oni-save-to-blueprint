const {
    readFileSync,
    writeFileSync
} = require('fs');
const {
    parseSaveGame
} = require('oni-save-parser');

function loadSaveGameFile(fileName) {
    const fileData = readFileSync(`./save-files/${fileName}.sav`);
    return parseSaveGame(fileData.buffer);
}

function saveJsonData(fileName, data) {
    saveDataInFile(`${fileName}.json`, data);
}

function saveBlueprintData(fileName, data) {
    try {
        writeFileSync(`./blueprints/${fileName}.blueprint`, data);
    } catch (ex) {
        console.error(ex);
    }
}

module.exports = {
    loadSaveGameFile,
    saveJsonData,
    saveBlueprintData
}
