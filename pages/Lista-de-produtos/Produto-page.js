import { ProdutoMap } from '../maps/Produto-maps';

export class ProdutoPage {
  buscarProduto(produtoNome) {
    cy.get(ProdutoMap.campoDePesquisa).type(produtoNome);
    cy.get(ProdutoMap.botaoDePesquisa).click();
  }

  adicionarLista() {
    cy.get(ProdutoMap.botaoAdicionarAlista).click();
  }

  navigateToShoppingList() {
    cy.contains(ProdutoMap.listaDeComprasLink).click();
    cy.url().should('include', '/minhaListaDeProdutos');
  }
}