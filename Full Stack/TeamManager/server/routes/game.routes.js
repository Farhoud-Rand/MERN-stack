const GameController = require('../controllers/game.controller');

module.exports = function(app){
    app.get('/api/games', GameController.getAllGames); 
    app.post('/api/game', GameController.createGame);
}