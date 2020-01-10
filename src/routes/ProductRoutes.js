const express = require('express');
const routes = new express.Router();

const ProductController = require('../controllers/ProductController');

routes.get('/', ProductController.index);
routes.post('/store', ProductController.store);
routes.put('/update/:_id', ProductController.update);
routes.delete('/delete/:_id', ProductController.delete);
routes.get('/:_id',ProductController.show);
routes.get('/search/:title',ProductController.search);

module.exports = routes;