describe('Cadastro de Novo Usuário', () => {
  const baseUrl = 'https://front.serverest.dev';

  beforeEach(() => {
    // Visita a página de login
    cy.visit(`${baseUrl}/login`);

    // Clica no link "Cadastre-se" para ir até a tela de cadastro
    cy.get('[data-testid="cadastrar"]').click();

    // Aguarda o formulário de cadastro carregar, verificando se o botão de cadastro está visível
    cy.get('[data-testid="cadastrar"]', { timeout: 10000 }).should('be.visible');
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    // Dados do usuário
    const user = {
      name: 'Teste Cypress',
      email: `teste${Date.now()}@email.com`, // Gera email único
      password: 'senha123',
    };

    // Preenche os campos do formulário de cadastro
    cy.get('[data-testid="nome"]').type(user.name); 
    cy.get('[data-testid="email"]').type(user.email);
    cy.get('[data-testid="password"]').type(user.password);

    // Submete o formulário de cadastro
    cy.get('[data-testid="cadastrar"]').click();

    // Verifica se a mensagem de sucesso aparece
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
    
    // Verifica se o redirecionamento ocorre para a página correta
    cy.url().should('eq', `${baseUrl}/home`); // Atualize para '/home' se for o comportamento correto
  });

});
