<h1 align="center">
   Cashforce-Fullstack
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
</p>


## 💻 Sobre o projeto

Nesse projeto o objetivo foi desenvolver uma pagina frontend e mostrar todas as notas fiscais do usuario, disponibilizado pelo backend acessando o DB.
No frontend foi utilizado o Vue, e no backend Typescript:


Imagem de como ficou no final a página:

<img src="assets/cashforce-image-end.jpg" alt="Aplicação web" style="max-width: 100%;">


## 🚀 Como executar o projeto

Clonar o repositorio.

<details>
<summary><strong>Rodando localmente:</strong></summary><br />

<strong>BackEnd(Porta 3001)</strong>
   
  - Entrar na pasta server

  - Criar um arquivo .env na raiz do projeto(passar as variaveis de ambiente especificadas em .env.example)

    Executar os comandos:

    - npm install

    - npm run start
    
    Caso Banco não esteja criado e alimentado pode utilizar o comando:
    - npm run prestart(Fara a criação do banco de dados,migrations e alimentação do banco)
    
<strong>FrontEnd(Porta 8080)</strong>

   - Entrar na pasta client

   Executar os comandos:

    - npm install

    - npm run start

</details>

<details>
<summary><strong>Rodando pelo Docker-compose:</strong></summary><br />
   Na pasta raiz executar o comando:
   
    - docker-compose up

   Nesse momento tanto o front quanto o back devem estar rodando normalmente
   Caso não ocorra de os seguintes comandos:

    - docker exec -it app_server bash

    - npm install

    - npm run start

    Abra outro terminal e de os comandos:
   
    - docker exec -it app_client bash

    - npm install

    - npm run start

</details>

A aplicação será aberta na porta:8080 - acesse http://localhost:8080


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

<strong>Backend</strong>

-   **[TypeScript](https://github.com/microsoft/TypeScript)**
-   **[Node.js](https://github.com/nodejs/node)**
-   **[Sequelize](https://github.com/sequelize/sequelize)**
-   **[EsLint](https://github.com/eslint/eslint)**
-   **[Express](https://github.com/expressjs/express)**
-   **[MySQL](https://github.com/mysql)**
-   **[CORS]**

---

## Endpoint para cadastro do usuario

- O endpoint acessível através do caminho POST(`/user/cadaster`).

- A rota deve receber os campos `username` e `password`.

- O endpoint recebe a estrutura abaixo e retorna como resposta um token:
```json
  {
    "username": "string",
    "password": "string"
  }
```

---

## O endpoint para login de usuario;

- O endpoint acessível através do caminho POST(`/user/login`);
- 
- O endpoint recebe a estrutura abaixo e retorna como resposta um token:
```json
   {
    "username": "string",
    "password": "string"
   }
```

---

# Todos os EndPoins abaixo necessitam do Token na requisição

---

## O endpoint traz o balanço do usuario;

- O endpoint acessível através do caminho GET(`/user/balance`);

Retorna o balanço do usuario logado.

---

## Rota Transactions

---

## O endpoint traz as transações do usuario

- O endpoint acessível através do caminho GET(`/transactions`);

Retorna todas as transações em que o usuario participou.

---

## O endpoint é capaz de criar uma transação para um usuario especifico;

- O endpoint deve ser acessível através do caminho POST(`/transactions`);
```json
   {
    "username": "string",
    "cashOutValue": "number"
   }
```

---
## O endpoint filtra as transações do usuario saida, entrada e data;

- O endpoint deve ser acessível através do caminho POST(`/transactions`);
```json
   {
    "cashOut": "boolean",
    "cashIn": "boolean",
    "date": "string"
   }
```

---
