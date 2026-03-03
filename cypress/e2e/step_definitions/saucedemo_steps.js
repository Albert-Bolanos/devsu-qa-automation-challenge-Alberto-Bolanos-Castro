import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/LoginPage";
import productsPage from "../../pages/ProductsPage";
import cartPage from "../../pages/CartPage";
import checkoutPage from "../../pages/CheckoutPage";
import UserData from "../../models/UserData";
import CheckoutData from "../../models/CheckoutData";
import { uiAssertions as assertions } from "../../support/assertions/index";
import { MESSAGES } from "../../support/constants/index";

Given("que me autentico en SauceDemo con el usuario {string} y la contraseña {string}", (username, password) => {
    const user = new UserData(username, password);
    loginPage.login(user.username, user.password);
});

When("agrego los productos {string} y {string} al carrito", (product1, product2) => {
    productsPage.addItemToCart(product1);
    productsPage.addItemToCart(product2);
});

When("visualizo el carrito", () => {
    productsPage.clickCart();
    cartPage.clickCheckout();
});

When("completo el formulario de compra con los datos {string}, {string} y {string}", (firstName, lastName, postalCode) => {
    const info = new CheckoutData(firstName, lastName, postalCode);
    checkoutPage.fillInformation(info.firstName, info.lastName, info.postalCode);
    checkoutPage.clickContinue();
});

Then("finalizo la compra y verifico el mensaje {string}", (expectedMessage) => {
    checkoutPage.clickFinish();
    checkoutPage.completeHeader.then(($el) => {
        assertions.validateValue($el.text(), MESSAGES.CHECKOUT_COMPLETE);
    });
});
