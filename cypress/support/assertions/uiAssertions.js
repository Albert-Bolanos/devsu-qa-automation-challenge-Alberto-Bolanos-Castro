class UiAssertions {
    validateValue(actual, expected) {
        expect(actual).to.eq(expected);
    }

    validateVisible(selector) {
        cy.get(selector).should('be.visible');
    }

    validateTextContain(selector, expectedText) {
        cy.get(selector).should('contain.text', expectedText);
    }
}

export default new UiAssertions();
