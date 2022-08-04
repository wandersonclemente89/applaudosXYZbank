const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/cucumber-json/',
    reportPath: "cypress/reports/MultipleReport",
    pageTitle: 'Automation Report - XYZ BANK',
    reportName: 'XYZ BANK - Automation Report',
    displayDuration: true,
    displayReportTime: true,
    metadata:{
        browser: {
            name: "Chrome"
        },
        device: 'Desktop',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Additional Information',
        data: [
            {label: 'Project', value: 'XYZ BANK'},
            {label: 'Environment', value: process.env.NODE_ENV}
        ]
    }
});