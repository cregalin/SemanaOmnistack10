const express = require('express');

const app = express();

// Tipos de parâmetros:
// Query Params: req.query (Filtros, ordenação, paginação) .Incorporados na url
// Route Params:
// Body: 
app.post('/', (request, response) => {
    return response.json({ message:  'Hello Worl'});
});

app.listen(3333);