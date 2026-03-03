// Import Cypress commands
import './commands';
import "allure-cypress";

// This file is processed and loaded automatically before your test files.
Cypress.on('uncaught:exception', (err, runnable) => {
    // Retornar false previene que Cypress falle el test por errores no capturados en la app
    return false;
});

beforeEach(() => {
    // Bloquear trackers usando patrones de URL que Cypress sí acepta
    cy.intercept('**/*backtrace.io/**', { statusCode: 200, body: {} });
    cy.intercept('**/*google-analytics.com/**', { statusCode: 200, body: {} });
});
