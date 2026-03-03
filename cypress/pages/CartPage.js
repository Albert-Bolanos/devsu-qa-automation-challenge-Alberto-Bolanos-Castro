class CartPage {
    clickCheckout() {
        cy.get('#checkout').click();
    }
}

export default new CartPage();
