import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que abro la página de Cypress", () => {
    cy.visit("https://example.cypress.io");
});

When("hago clic en el enlace {string}", (linkText) => {
    cy.contains(linkText).click();
});

Then("debería ver el título {string}", (title) => {
    cy.get("h1").should("contain", title);
});
