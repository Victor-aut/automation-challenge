import * as user from '../../fixtures/users';

describe('Valid user', () => {
  it('should login with a valid user', () => {
    cy.visit('/').login(user.standard_user, user.password);

    cy.url().should('include', '/inventory');
  });
});
