import { LoginPage } from '../../src/pages/Autenticacao/login-page';
import { ProdutoPage } from '../../src/pages/Lista-de-produtos/Produto-page';
import { listaDeProdutosPage } from '../../src/pages/Lista-de-produtos/lista-de-compras-page';

describe('Fluxo de Pesquisa e Adição à Lista', () => {
  const paginaDeLogin = new LoginPage();
  const paginaDeProdutos = new ProdutoPage();
  const paginaListaDeCompras = new listaDeProdutosPage();

  beforeEach(() => {
    cy.fixture('data').then((dados) => {
      paginaDeLogin.visitar();
      paginaDeLogin.campoEmail(dados.existingUser.email);
      paginaDeLogin.campoSenha(dados.existingUser.password);
      paginaDeLogin.botaoLogin();
      cy.url().should('include', '/home').then((url) => {
        expect(url).to.include('/home');
      });
    });
  });

  it('Deve pesquisar um produto, adicioná-lo à lista e validar na tela da lista', () => {
    cy.fixture('data').then((dados) => {
      const produtoPesquisado = dados.produto.nome;

      paginaDeProdutos.pesquisarProduto(produtoPesquisado);
      cy.get('[data-testid="botaoPesquisar"]').then(($botao) => {
        expect($botao).to.be.visible;
      });

      paginaDeProdutos.adicionarNaLista();
      cy.get('[data-testid="adicionarNaLista"]').then(($botao) => {
        expect($botao).to.be.visible;
      });

      paginaDeProdutos.navegarParaListaDeCompras();
      cy.url().should('include', '/minhaListaDeProdutos').then((url) => {
        expect(url).to.include('/minhaListaDeProdutos');
      });

      paginaListaDeCompras.validarProdutoNaLista(produtoPesquisado);
      cy.contains(produtoPesquisado).then(($produto) => {
        expect($produto).to.be.visible;
      });
    });
  });
});
