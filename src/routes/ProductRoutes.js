const express = require('express');
const routes = new express.Router();

const ProductController = require('../controllers/ProductController');


routes.post('/store', ProductController.store);
routes.put('/update/:_id', ProductController.update);
routes.delete('/delete/:_id', ProductController.delete);
routes.get('/search/:title',ProductController.search);
routes.get('/searchquery',ProductController.searchQueryString);
routes.get('/:_id',ProductController.show);
routes.get('/', ProductController.index);

module.exports = routes;