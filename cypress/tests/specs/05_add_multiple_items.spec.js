import * as user from '../../fixtures/users';
import Swaglabs from '../pageobjects/swaglabs';

describe('Add items', () => {
  it('should add multiple items to the shopping cart', () => {
    cy.visit('/').login(user.standard_user, user.password);

    Swaglabs.addMultipleItems(4);
    Swaglabs.goToShoppingCart();

    cy.get(Swaglabs.cartItem).should('have.length', 4);
  });
});
