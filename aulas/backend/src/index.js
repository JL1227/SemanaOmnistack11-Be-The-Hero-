const express = require('express');
const routes = require('./routes');

const app = express();

appp.use(cors());
app.use(express.json());
app.use(routes);

// Rota / Recurso

/* 
Métodos HTTP

GET: Buscar/listar uma informação no back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/


/*
Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na rota após ? (Filtros, paginação)
Route Params: Parâmetros utilizados pra identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/* 
Bancos de dados:

SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc
*/

app.listen(3333) // Porta: http://localhost:3333/

