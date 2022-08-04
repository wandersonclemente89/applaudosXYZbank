/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require("fs-extra");
const path = require("path");
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const cucumber = require('cypress-cucumber-preprocessor').default
const { isFileExist, findFiles  } = require('cy-verify-downloads');

function getConfigurationByFile(file) {
    try {
        const pathToConfigFile = path.resolve("config", `${file}.json`);
        console.log(pathToConfigFile);
        return fs.readJson(pathToConfigFile);
    } catch (error) {
        console.log(error);
    }
}

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
    on('file:preprocessor', cucumber())
    on('task', { isFileExist, findFiles })

    // accept a configFile value or use development by default
    const file = process.env.NODE_ENV || "environment1";
    console.log(file);
    return getConfigurationByFile(file.trim());
}
