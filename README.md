# Desafio Front-end - Processo seletivo XP

## Sobre o projeto

Neste projeto desenvolvi um aplicativo de investimento em ações e conta digital. Ele é estruturado por quatro telas: login, listagem de ações, compra/venda de ações e conta digital.

<p align="center">
  <img src="app_login.png" width="150px">
  &nbsp
  <img src="app_lista.png" width="150px">
  &nbsp
  <img src="app_negociar.png" width="150px">
  &nbsp
  <img src="app_conta.png" width="150px">
</p>

### Login

- É feita a validação do e-email e senha, sendo que o botão para acessar o aplicativo fica desabilitado apenas após a inserção de dados válidos;

- As informações do login (e-mail e data de acesso) ficam salvas no local storage, e no próximo acesso é apresentando o último e-mail logado no input.

### Listagem de ações

- A tabela mostra as ações do usuário e as que estão dispoíveis para investir;

- O botão que direciona para tela de compra/venda de ações só é desabilidado quando uma ação é selecionada.

### Compra e venda de ações

- Mostra os dados da ação selecionada e um resumo com os detalhes da operação;

- São feitas as seguintes validações:

    - Compra: se o usuário possui saldo suficiente e se a quantidade de ações selecionada está disponível;

    - Venda: Se o usuário possui a quantidade de ações selecionada. 


### Conta digital

- Mostra o saldo da conta e é possível fazer operções de saque/retirada;

- É validado se o usuário possui saldo suficiente para realizar a retirada.

## Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [React.js](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/pt-BR/)

## Back-end

Para alimentar a aplicação desenvolvi uma API simples com um endpoint que retorna a listagem dos ativos.

- [Documentação da api](https://xp-api-mariane.herokuapp.com/docs)

- [Repositório](https://github.com/MarianeAlgayer/psel-xp-back-end)

## Como baixar e executar o projeto

- Clonar o repositório:

```
    git clone git@github.com:MarianeAlgayer/psel-xp-front-end.git
```

- Entrar no diretório do projeto:

```
    cd psel-xp-front-end/front-end
```

- Instalar as dependências:

```
    npm install
```

- Executar o projeto:

```
    npm start
```
## Testes

- Para rodar os testes:

```
    npm test
```

## Deploy

Você também pode acessar o projeto aqui: [deploy link](https://psel-xp-front-end-mariane.vercel.app/).

<p align="right"><a href="#top">Voltar ao topo</a></p>
