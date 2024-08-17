const ConnectorController = require('../controllers/connector.controllers');

module.exports = function(app){
    app.get('/api/connector/:gameId',ConnectorController.getPlayersForGame);
    app.post('/api/connector/:gameId/:playerId',ConnectorController.add);
    app.patch('/api/connector/:gameId/:playerId', ConnectorController.update);
    app.delete('/api/connector/:gameId/:playerId', ConnectorController.delete);
}
// Game id => 66bdb80b864b7919eaa04d18
// player id => 66bdbc7319dd5015c1304a12

// muath --> 66bdf9795f70a925c2bd6eaa
