import cadastroPage from '../../pages/cadastroPage';

describe('Cadastro de Novo Usuário', () => {
  beforeEach(() => {
    cadastroPage.visitLoginPage();
    cadastroPage.navigateToCadastro();
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.fixture('data').then(({ newUser }) => {

      const userEmail = `teste${Date.now()}@email.com`;

      cadastroPage.fillName(newUser.name);
      cadastroPage.fillEmail(userEmail); 
      cadastroPage.fillPassword(newUser.password);
      cadastroPage.submitForm();
      cadastroPage.verifySuccessMessage();

      cy.url().should('eq', `${Cypress.env('baseUrl')}/home`)
        .then((url) => {
          expect(url).to.include('/home'); 
        });
    });
  });
});
