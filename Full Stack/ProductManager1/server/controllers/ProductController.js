const { request, response } = require('express');
const { Product } = require('../models/product.model');

// Function to add new product 
module.exports.addNewProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

// Function to get all products 
module.exports.getAllProducts = (request, response) => {
    Product.find({})
    .then(products => response.json(products))
    .catch(err => response.json(err))
}

// Function to get a product information by its ID 
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}