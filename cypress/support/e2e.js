// Import Cypress commands
import './commands';
import "allure-cypress";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

beforeEach(() => {
    cy.intercept('**/*backtrace.io/**', { statusCode: 200, body: {} });
    cy.intercept('**/*google-analytics.com/**', { statusCode: 200, body: {} });
});
