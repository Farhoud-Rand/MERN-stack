const Player = require('../models/player.model'); //This is to import models

//This function is used to get all the documents
module.exports.getAllPlayers = (request, response) => { 
    Player.find({})
        .then(players => response.json(players))
        .catch(err => response.json(err));
}

//This Function is used to create a document
module.exports.createPlayer = (request, response) => {
    const { name, position } = request.body;
    Player.create({ name, position })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
}

//This function is used to get a specific document
module.exports.getPlayer = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(player => response.json(player))
        .catch(err => response.json(err))
}

// This function is used to update player information by his ID
module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators:true}) 
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err));
}

//This function is used to delete a document
module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}