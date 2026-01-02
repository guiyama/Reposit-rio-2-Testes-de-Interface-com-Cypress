# Reposit-rio-2-Testes-de-Interface-com-Cypress

Testes Automatizados – SauceDemo (Cypress)

Projeto de automação de testes end-to-end para o site https://www.saucedemo.com/
 utilizando Cypress, cobrindo o fluxo de login e checkout.

Tecnologias:
Node.js
Cypress
JavaScript

Estrutura do Projeto
saucedemo-cypress-tests
├── cypress
│   └── e2e
│       └── checkout.cy.js
├── cypress.config.js
├── package.json
└── README.md

Cenário Automatizado:
Login com usuário válido
Adição de produtos ao carrinho
Checkout completo
Validação da compra realizada

Credenciais
Usuário: standard_user
Senha: secret_sauce

Pré-requisitos:
Node.js instalado

Instalação:
Na raiz do projeto, instale as dependências:
npm install

Como Executar os Testes:
Abrir o Cypress (modo interativo)
npx cypress open
Executar em modo headless
npx cypress run

Boas Práticas:
Testes claros e objetivos
Uso de seletores estáveis
Validações explícitas
Código simples e fácil de manter
