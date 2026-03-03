class CheckoutPage {
    fillInformation(firstName, lastName, postalCode) {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(postalCode);
    }

    clickContinue() {
        cy.get('#continue').click();
    }

    clickFinish() {
        cy.get('#finish').click();
    }

    get completeHeader() {
        return cy.get('.complete-header');
    }
}

export default new CheckoutPage();
