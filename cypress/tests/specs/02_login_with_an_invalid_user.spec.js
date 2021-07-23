import * as user from '../../fixtures/users';
import Swaglabs from '../pageobjects/swaglabs';

describe('Invalid user', () => {
  it('should validate the error message', () => {
    cy.visit('/').login(user.locked_out_user, user.password);

    cy.get(Swaglabs.error).should(
      'have.text',
      'Epic sadface: Sorry, this user has been locked out.'
    );
  });
});
