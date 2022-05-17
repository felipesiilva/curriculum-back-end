const express = require('express');
const ContatoController = require('./controllers/ContatoController');


const routes = express.Router();

routes.get('/contatos', ContatoController.index);
routes.post('/contatos', ContatoController.store);

module.exports = routes;