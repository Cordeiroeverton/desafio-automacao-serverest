# Cenários de Teste Automatizados

Este projeto contém testes automatizados utilizando Cypress para validar fluxos críticos de login e pesquisa em um sistema web.

## Estrutura dos Testes

### 1. Usuário - Fluxo de Login

**Descrição:**

Testa o fluxo de login de um usuário, garantindo o funcionamento esperado em diferentes cenários.

**Cenários Testados:**

- **Login com sucesso:**
  - O usuário insere credenciais válidas e é redirecionado para a página inicial.
  
- **Login com credenciais inválidas:**
  - O usuário insere credenciais inválidas e não consegue acessar a página inicial.
  
- **Login com campos vazios:**
  - O usuário tenta realizar login sem preencher os campos obrigatórios e permanece na página de login.

**Comandos:**
- Acesse a URL base `https://front.serverest.dev/login`.
- Utilize o arquivo de fixture `data.json` para carregar credenciais do usuário.

**Pré-requisitos:**
Certifique-se de que o arquivo `data.json` contém as credenciais de um usuário válido no seguinte formato:

```json
{
  "existingUser": {
    "email": "usuario@email.com",
    "password": "senha123"
  }
}
```

---

### 2. Fluxo de Pesquisa e Adição à Lista

**Descrição:**

Valida o fluxo de pesquisa de um produto, adicionando-o a uma lista e verificando sua presença.

**Cenários Testados:**

- **Pesquisa e adição à lista:**
  - O usuário pesquisa por um produto, adiciona-o à lista de compras e verifica que o produto está presente na lista.

**Comandos:**
- Realiza login utilizando credenciais válidas do arquivo `data.json`.
- Pesquisa por um produto utilizando os dados do arquivo de fixture `data.json`.

**Pré-requisitos:**
Certifique-se de que o arquivo `data.json` contém os dados do produto no seguinte formato:

```json
{
  "produto": {
    "nome": "Produto Exemplo"
  }
}
```

**Passos:**
1. Realize login com credenciais válidas.
2. Pesquise pelo produto desejado.
3. Adicione o produto à lista de compras.
4. Navegue para a tela de lista de compras e valide a presença do produto.

---

## Execução dos Testes

1. Certifique-se de ter o Cypress instalado no projeto:
   ```bash
   npm install cypress --save-dev
   ```

2. Abra o Cypress:
   ```bash
   npx cypress open
   ```

3. Execute os testes pelo painel do Cypress ou em modo headless:
   ```bash
   npx cypress run
   ```

---

## Notas Importantes

- As URLs e os seletores podem variar de acordo com o ambiente e a versão do sistema. Ajuste os testes conforme necessário.
- Sempre atualize os dados no arquivo `data.json` para refletir os casos de teste desejados.

## Estrutura do Projeto

- **`fixtures/data.json`**: Contém os dados utilizados pelos testes.
- **`integration/tests`**: Local onde os cenários de teste estão implementados.
- **`support/commands.js`**: Arquivo para adicionar comandos customizados, caso necessário.
