const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
    e2e: {
        specPattern: "cypress/e2e/**/*.feature",
        supportFile: "cypress/support/e2e.js",
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);

            // Configurar Allure
            allureCypress(on, config, {
                resultsDir: "allure-results",
            });

            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );

            return config;
        },
    },
});
