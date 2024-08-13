const { request, response } = require('express');
const { Author } = require('../models/author.model');

// Function to add new author 
module.exports.addNewAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

// Function to get all authors 
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
    .then(authors => response.json(authors))
    .catch(err => response.json(err))
}

// Function to get a author information by its ID 
module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err));
}

// Function to update author information 
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err));
}

// Function to delete a author 
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}