describe('Fluxo de Login e Checkout - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Deve realizar login e concluir o checkout com sucesso', () => {

    // Login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Validação do login
    cy.url().should('include', '/inventory.html');

    // Adicionar produtos ao carrinho
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-bike-light').click();

    // Ir para o carrinho
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    // Iniciar checkout
    cy.get('#checkout').click();

    // Preencher dados do checkout
    cy.get('#first-name').type('João');
    cy.get('#last-name').type('Silva');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();

    // Revisão do pedido
    cy.url().should('include', '/checkout-step-two.html');

    // Finalizar compra
    cy.get('#finish').click();

    // Validação de sucesso
    cy.get('.complete-header')
      .should('contain.text', 'Thank you for your order!');
  });

});