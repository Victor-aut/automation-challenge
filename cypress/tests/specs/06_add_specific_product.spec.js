import * as user from '../../fixtures/users';
import Swaglabs from '../pageobjects/swaglabs';

describe('Add product', () => {
  it('should add a specific product', () => {
    cy.visit('/').login(user.standard_user, user.password);

    Swaglabs.addSpecificProduct('Sauce Labs Onesie');
    Swaglabs.goToShoppingCart();

    cy.get(Swaglabs.itemName).should('have.text', 'Sauce Labs Onesie');
  });
});
