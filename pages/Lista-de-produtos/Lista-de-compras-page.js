import { ListaDeCompras } from '../maps/Lista-de-compras.maps';

class ListaDeComprasPage {
  validateProductInList(produtoNome) {
    cy.contains(ListaDeCompras.listadeComprasTitulo).should('be.visible');
    cy.contains(produtoNome).should('be.visible');
  }
}

export default ListaDeComprasPage;