const express = require('express');
const routes = require('./routes');
const cors  = require('cors')
const app = express();




app.get("/", (req, res) => {
    res.send("Hello, world");
});




app.use(cors());
app.use(express.json());
app.use(routes)
app.listen(3333, () => {
    console.log("Servidor online!");
});




/* 
Rota / Recurso

Metodos HTTP
GET: buscar/listar uma informaçao do back-end
POST: criar uma informaçao no back-end
PUT: alterar uma informaçao no back-end
DELETE: deletar uma informaçao do back-end

Tipos de parametors
Query Params: parametros nomeados enviados na rota, apos o ? (filtros, paginaçao)
Route Params: parametros utilizados para identificar recursos
Request Body: corpo da requisiçao utilizado para criar ou alterar recursos 

bancos de dados
SQL: MySQL, SQLite, Oracle, etc
noSQL: MongoDB, CouchDB, etc

Driver: SELECT * FROM users
Query Builders: table('users').select('*').where()
*/

