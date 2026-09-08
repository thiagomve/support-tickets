# Support Tickets API

API simples de gerenciamento de tickets de suporte, desenvolvida utilizando **apenas os módulos nativos do Node.js** (`http`, `fs`, `url`, etc.), sem o uso de frameworks como Express ou Fastify.

## Objetivo

Este projeto tem fins de estudo, com o objetivo de entender como uma API funciona por baixo dos panos, implementando manualmente conceitos que normalmente são abstraídos por frameworks, como:

- Criação de um servidor HTTP puro
- Roteamento de requisições
- Middlewares
- Parsing de body e query params
- Persistência de dados em arquivo

## Tecnologias

- Node.js (módulos nativos)
- JSON como banco de dados (arquivo `db.json`)

### Descrição dos diretórios

- **controllers/tickets** — Contém as funções responsáveis por cada operação da API (criar, listar, remover, atualizar e atualizar status de um ticket).
- **database** — Implementa uma classe `Database` responsável por ler e persistir os dados em um arquivo JSON (`db.json`), simulando um banco de dados simples baseado em arquivo (*flat-file database*).
- **middlewares** — Funções intermediárias que processam a requisição antes de chegar ao controller, como o parsing do corpo da requisição em JSON (`jsonHandler`) e o tratamento de rotas (`routeHandler`).
- **routes** — Define as rotas disponíveis na API e as associa aos respectivos controllers.
- **utils** — Funções auxiliares, como extração de query params da URL e parsing de caminhos de rota (útil para identificar parâmetros dinâmicos, como `:id`).
- **server.js** — Ponto de entrada da aplicação, onde o servidor HTTP é criado e configurado.

## Rotas disponíveis

| Operação | Método HTTP | Rota | Controller |
|---|---|---|---|
| CREATE | POST | `/tickets` | `create` |
| INDEX | GET | `/tickets` | `index` |
| UPDATE | PUT | `/tickets/:id` | `update` |
| UPDATE STATUS | PATCH | `/tickets/:id/close` | `updateStatus` |
| REMOVE | DELETE | `/tickets/:id` | `remove` |

## Como executar

```bash
npm run dev
```

Esse comando executa o servidor com `node --watch src/server.js`, reiniciando automaticamente a cada alteração nos arquivos.

Como o projeto não possui dependências externas, não é necessário rodar `npm install` — apenas ter o Node.js instalado na máquina já é suficiente.