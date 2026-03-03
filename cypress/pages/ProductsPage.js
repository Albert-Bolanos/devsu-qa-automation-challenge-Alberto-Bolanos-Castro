class ProductsPage {
    get title() {
        return cy.get('.title');
    }

    addItemToCart(productName) {
        const productSelector = productName.toLowerCase().replace(/ /g, '-');
        cy.get(`#add-to-cart-${productSelector}`).click();
    }

    clickCart() {
        cy.get('.shopping_cart_link').click();
    }

    clickCheckout() {
        cy.get('#checkout').click();
    }
}

export default new ProductsPage();
