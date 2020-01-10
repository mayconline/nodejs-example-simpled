const express = require('express');
const routes = new express.Router();

const ProductController = require('../controllers/ProductController');

routes.get('/', ProductController.index);
routes.post('/store', ProductController.store);
routes.put('/update/:_id', ProductController.update);
routes.delete('/delete/:_id', ProductController.delete);

module.exports = routes;