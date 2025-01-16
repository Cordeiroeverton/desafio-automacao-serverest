import CadastroUsuarioMap from '../maps/cadastro-usuario-map';

class CadastroUsuarioPage {
  visitLoginPage() {
    cy.visit(Cypress.env('loginUrl'));
  }

  navigateToCadastro() {
    cy.get(CadastroUsuarioMap.botaoCadastrar).click();
    cy.get(CadastroUsuarioMap.botaoCadastrar, { timeout: 10000 }).should('be.visible');
  }

  fillName(name) {
    cy.get(CadastroUsuarioMap.campoNome).type(name);
  }

  fillEmail(email) {
    cy.get(CadastroUsuarioMap.campoEmail).type(email);
  }

  fillPassword(password) {
    cy.get(CadastroUsuarioMap.campoSenha).type(password);
  }

  submitForm() {
    cy.get(CadastroUsuarioMap.botaoCadastrar).click();
  }

  verifySuccessMessage() {
    cy.contains(CadastroUsuarioMap.mensagemSucesso).should('be.visible');
  }

  verifyRedirectionToHome() {
    cy.url().should('eq', Cypress.env('homeUrl')); 
  }
}

export default new CadastroUsuarioPage();
