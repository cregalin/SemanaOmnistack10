const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();
// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação) .Incorporados na url
// Route Params: request.params (Identificar recurso na alteração ou remoção) nao tem nome, fica só na rota
// Body: request.body (Dados para a criação ou alteração de um registro)
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;