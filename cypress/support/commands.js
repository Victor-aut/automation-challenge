Cypress.Commands.add('login', (user, password) => {
  cy.get('#user-name').type(user);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
  cy.wait(1000);
});

Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
});
