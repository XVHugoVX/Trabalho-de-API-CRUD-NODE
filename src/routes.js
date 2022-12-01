const express = require('express');
const UsuarioController = require('./controller/UsuarioController');

const routes = express.Router();

routes.get('/', (req, res) => (
    res.send('Hello World!')
));

routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.findById);
routes.post('/usuario', UsuarioController.store);
routes.delete('/usuario/:id', UsuarioController.delete);
routes.put('/usuario', UsuarioController.update);

module.exports = routes;