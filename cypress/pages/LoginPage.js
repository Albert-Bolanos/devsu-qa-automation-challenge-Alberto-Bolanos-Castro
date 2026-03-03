import { UI_URLS } from '../support/constants/index';

class LoginPage {
    visit() {
        cy.visit(UI_URLS.SAUCEDEMO);
        cy.get('#user-name').should('be.visible');
    }

    typeUsername(username) {
        cy.get('#user-name').type(username);
    }

    typePassword(password) {
        cy.get('#password').type(password);
    }

    clickLogin() {
        cy.get('#login-button').click();
    }

    login(username, password) {
        this.visit();
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }
}

export default new LoginPage();
