describe('Usuário - Fluxo de Login', () => {
    const baseUrl = 'https://front.serverest.dev';
  
    beforeEach(() => {
      // Visita a página de login
      cy.visit(`${baseUrl}/login`);
    });
  
    it('Deve realizar login com sucesso', () => {
      // Carrega dados do usuário existente do arquivo fixtures/data.json
      cy.fixture('data').then((data) => {
        const user = data.existingUser;
  
        // Preenche os campos de login
        cy.get('[data-testid="email"]').type(user.email);
        cy.get('[data-testid="senha"]').type(user.password);
  
        // Submete o formulário de login
        cy.get('[data-testid="entrar"]').click();
  
        // Verifica se o redirecionamento ocorre para a página esperada
        cy.url().should('include', '/home'); // Ajuste a URL conforme necessário
      });
    });
  
    it('Deve tentar login com credenciais inválidas', () => {
      // Dados de credenciais inválidas
      const invalidUser = {
        email: 'usuarioinvalido@email.com',
        password: 'senhaerrada',
      };
  
      // Preenche os campos de login com credenciais inválidas
      cy.get('[data-testid="email"]').type(invalidUser.email);
      cy.get('[data-testid="senha"]').type(invalidUser.password);
  
      // Submete o formulário de login
      cy.get('[data-testid="entrar"]').click();
  
      // Apenas garante que a página não redireciona para '/home'
      cy.url().should('not.include', '/home'); // Ajuste conforme o comportamento esperado
    });
  
    it('Deve tentar login com campos vazios', () => {
      // Submete o formulário de login sem preencher os campos
      cy.get('[data-testid="entrar"]').click();
  
      // Apenas garante que a página não redireciona para '/home'
      cy.url().should('not.include', '/home'); // Ajuste conforme o comportamento esperado
    });
  });
  