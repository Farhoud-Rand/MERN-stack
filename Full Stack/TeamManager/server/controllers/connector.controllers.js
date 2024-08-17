const Connector = require('../models/connector.model'); //This is to import models

// Create a connection between a player and a game
module.exports.add = (request, response) => {
    const { status } = request.body;
    Connector.create({ player: request.params.playerId, game: request.params.gameId, status: status })
    .then((connector) => {
        console.log('Connector created:', connector);
        response.json(connector);
    })
    .catch((err) => {
        console.error('Error creating connector:', err);
        response.status(400).json(err);
    });
}

//This function is used to get a specific document
module.exports.getPlayersForGame = (request, response) => {
    // Find all connectors related to the specific game and populate player information
    Connector.find({ game: request.params.gameId })
    // .populate('player') // Populate the player field with player data
    .then((connectors) => {
        // connectors will be an array of objects with player and status information
        console.log("**********************")
        connectors.forEach(connector => {
            console.log(`Player: ${connector.player._id}, Status: ${connector.status}`);
        });
        response.json(connectors);
    })
    .catch((err) => {
        console.error('Error fetching players for game:', err);
        response.status(400).json(err);
    });
}

// This function is used to update game information by his ID
module.exports.update = (request, response) => {
    // Find the connector document and update the status
    Connector.findOneAndUpdate(
        { player: request.params.playerId, game: request.params.gameId }, // Find the document where gameId and playerId match
        request.body, // Update the status field with the new value
        { new: true } // Option to return the updated document
    )
    .then(updatedConnector => {
        if (updatedConnector) {
            console.log(`Status updated successfully: ${updatedConnector}`);
            response.json(updatedConnector);
        } else {
            console.log('No matching document found');
            response.json(updatedConnector);
        }

    })
    .catch(err => {
        console.error('Error updating status:', err);
        response.status(400).json(err);
    });
}

//This function is used to delete a document
module.exports.delete = (request, response) => {
    // Find the connector document and delete it
    Connector.deleteOne({ player: request.params.playerId, game: request.params.gameId })
    .then(result => {
        if (result.deletedCount > 0) {
            console.log('Connector successfully deleted');
            response.json(result);
        } else {
            console.log('No matching document found');
        }
    })
    .catch(err => {
        console.error('Error deleting connector:', err);
    });
}