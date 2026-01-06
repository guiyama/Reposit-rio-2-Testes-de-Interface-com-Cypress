describe('Fluxo de Login - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Deve realizar login com sucesso', () => {

    // Login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Validação do login
    cy.url().should('include', '/inventory.html');

  })
  
});
