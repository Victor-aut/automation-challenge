import * as user from '../../fixtures/users';
import Swaglabs from '../pageobjects/swaglabs';

describe('Sort products', () => {
  it('should sort products by price (low to high(', () => {
    cy.visit('/').login(user.standard_user, user.password);

    Swaglabs.orderBy('Price (low to high)');
    cy.get(Swaglabs.itemPrice).eq(0).should('have.text', '$7.99');
    cy.get(Swaglabs.itemPrice).eq(1).should('have.text', '$9.99');
    cy.get(Swaglabs.itemPrice).eq(2).should('have.text', '$15.99');
    cy.get(Swaglabs.itemPrice).eq(3).should('have.text', '$15.99');
    cy.get(Swaglabs.itemPrice).eq(4).should('have.text', '$29.99');
    cy.get(Swaglabs.itemPrice).eq(5).should('have.text', '$49.99');
  });
});
