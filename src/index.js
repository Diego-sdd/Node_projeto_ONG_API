
/**
 * Tipos de parâmetros:
 * 
 * Query Params:Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar resursos
 * 
 */

const express = require('express');
const router = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors(
    //{EXemplo: origin: https:www.meuapp.com}
));
app.use(express.json());
app.use(router);

app.listen(3333);


