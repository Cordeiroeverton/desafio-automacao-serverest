describe('Usuário - Fluxo de Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('loginUrl')); 
  });

  it('Deve realizar login com sucesso', () => {
    cy.fixture('data').then(({ existingUser }) => {
      cy.intercept('POST', '**/login').as('loginRequest');
      
      loginPage.fillEmail(existingUser.email);
      loginPage.fillPassword(existingUser.password);
      loginPage.submit();
  
      cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

      cy.url().should('include', Cypress.env('homeUrl')).then((url) => {
        expect(url).to.include(Cypress.env('homeUrl'));
      });
      
      cy.get('[data-testid="user-name"]').should('be.visible').and('contain', existingUser.name);
    });
  });
  
  it('Deve falhar ao tentar login com credenciais inválidas', () => {
    cy.fixture('data').then(({ invalidUser }) => {
      loginPage.fillEmail(invalidUser.email);
      loginPage.fillPassword(invalidUser.password);
      loginPage.submit();

      cy.url().should('include', Cypress.env('loginUrl')).then((url) => {
        expect(url).to.include(Cypress.env('loginUrl')); 
      });


      cy.get('[data-testid="error-message"]')
        .should('be.visible')
        .and('contain', 'Credenciais inválidas')
        .then((element) => {
          expect(element.text()).to.equal('Credenciais inválidas'); 
        });
    });
  });
  
  it('Deve falhar ao tentar login com campos vazios', () => {
    loginPage.submit();

    cy.url().should('include', Cypress.env('loginUrl')).then((url) => {
      expect(url).to.include(Cypress.env('loginUrl')); 
    });

    cy.get('[data-testid="email"]')
      .should('have.attr', 'aria-invalid', 'true')
      .and('have.attr', 'placeholder', 'Digite seu e-mail')
      .then((element) => {
        expect(element.attr('aria-invalid')).to.equal('true'); 
      });

    cy.get('[data-testid="senha"]')
      .should('have.attr', 'aria-invalid', 'true')
      .and('have.attr', 'placeholder', 'Digite sua senha')
      .then((element) => {
        expect(element.attr('aria-invalid')).to.equal('true'); 
      });
  });
});