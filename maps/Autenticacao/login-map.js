import loginMap from '../maps/login-map';

class LoginPage {

  fillEmail(email) {
    cy.get(loginMap.campoEmail)
      .should('be.visible') 
      .type(email, { force: true }); 
  }

  fillPassword(password) {
    cy.get(loginMap.campoSenha)
      .should('be.visible') 
      .type(password, { force: true }); 
  }

  submit() {
    cy.get(loginMap.botaoLogin)
      .should('be.enabled') 
      .click(); 
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }

  verifyLoginSuccess() {
    cy.url({ timeout: 10000 }).should('include', '/home'); 
    cy.get('[data-testid="user-name"]').should('be.visible');
  }


  verifyLoginFailure() {
    cy.url().should('include', '/login'); 
    cy.get('[data-testid="error-message"]') 
      .should('be.visible')
      .and('contain', 'Credenciais inválidas');
  }
}

export default new LoginPage();
