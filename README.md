# oni-save-to-blueprint

## Description
Command-line tool made with NodeJS for conversion of `.sav` files of a game [Oxygen Not Included](https://store.steampowered.com/app/457140/Oxygen_Not_Included/) into a `.blueprint` file used in [blueprint-not-included](https://blueprintnotincluded.com) application.

## Pre-requisites
You should have installed NodeJS (recommended version 12) and NPM (recommended version 6)

## How to use
* Put your `.sav` file (you can see where to find them [here](https://support.klei.com/hc/en-us/articles/360029555392-Logs-and-Useful-Information-for-Bug-Reports)) into `save-files` directory of this project.
* In the Terminal/Command Prompt/Console run `npm i` to install all dependencies.
* Then run `npm run create-blueprint <file-name>` to convert file. Replace `<file-name>` in the command with actual name of the file you copied omitting `.sav` extension.
* After the script is finished running, open `blueprints` directory and you'll find converted file there.
