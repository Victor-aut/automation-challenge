import * as user from '../../fixtures/users';
import Swaglabs from '../pageobjects/swaglabs';

describe('Logout', () => {
  it('should logout from the home page', () => {
    cy.visit('/').login(user.standard_user, user.password);
    cy.url().should('include', '/inventory');

    cy.logout();
    cy.get(Swaglabs.loginButton).should('be.visible');
  });
});
