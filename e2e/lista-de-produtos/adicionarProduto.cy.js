describe('Fluxo de Pesquisa e Adição à Lista', () => {
  const baseUrl = 'https://front.serverest.dev';

  const realizarLogin = (user) => {
    cy.get('[data-testid="email"]').type(user.email);
    cy.get('[data-testid="senha"]').type(user.password);
    cy.get('[data-testid="entrar"]').click();
    cy.url().should('include', '/home');
  };

  const pesquisarProduto = (produto) => {
    cy.get('[data-testid="pesquisar"]').type(produto);
    cy.get('[data-testid="botaoPesquisar"]').click();
  };

  const validarProdutoNaLista = (produto) => {
    cy.contains('Lista de Compras').should('be.visible');
    cy.contains(produto).should('be.visible');
  };

  beforeEach(() => {
    cy.visit(`${baseUrl}/login`);
    cy.fixture('data').then((data) => {
      realizarLogin(data.existingUser);
    });
  });

  it('Deve pesquisar um produto, adicioná-lo à lista e validar na tela da lista', () => {
    cy.fixture('data').then((data) => {
      const produtoPesquisado = data.produto.nome;

      pesquisarProduto(produtoPesquisado);

      // Adiciona o produto à lista
      cy.get('[data-testid="adicionarNaLista"]').click();

      // Navega para a tela de lista
      cy.contains('Lista de Compras').click(); // Ajuste o seletor se necessário
      cy.url().should('include', '/minhaListaDeProdutos'); // Atualize a URL conforme necessário

      validarProdutoNaLista(produtoPesquisado);
    });
  });
});
