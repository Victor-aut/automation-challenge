import * as user from '../../fixtures/users';
import Swaglabs from '../pageobjects/swaglabs';

describe('Purchase', () => {
  it('should complete a purchase', () => {
    cy.visit('/').login(user.standard_user, user.password);

    Swaglabs.addSpecificProduct('Sauce Labs Onesie');
    Swaglabs.goToShoppingCart();

    Swaglabs.clickCheckoutButton();
    Swaglabs.enterClientData('Victor', 'Cisneros', '38940');

    Swaglabs.finishThePurchase();
    cy.get(Swaglabs.header).should('have.text', 'THANK YOU FOR YOUR ORDER');
  });
});
