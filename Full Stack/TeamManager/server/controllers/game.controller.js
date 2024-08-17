const Game = require('../models/game.model'); //This is to import models

//This function is used to get all the documents
module.exports.getAllGames = (request, response) => { 
    Game.find({})
        .then(games => response.json(games))
        .catch(err => response.json(err));
}

//This Function is used to create a document
module.exports.createGame = (request, response) => {
    const { id } = request.body;
    Game.create({ id })
        .then(game => response.json(game))
        .catch(err => response.status(400).json(err));
}