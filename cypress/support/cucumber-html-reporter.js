var reporter = require('cucumber-html-reporter');
const cypress = require("cypress");

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s";
var dateTime = date+'_'+time;

var options = {
    theme: 'bootstrap',
    jsonFile: 'cypress/cucumber-json/',
    output: "cypress/reports/SingleReport.html",
    title:"XYZ BANK",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        "Test": "XYZ BANK",
        "Browser": "Chrome",
        "Platform": "Windows 11",
        "Executed": ""
    }
};

reporter.generate(options);