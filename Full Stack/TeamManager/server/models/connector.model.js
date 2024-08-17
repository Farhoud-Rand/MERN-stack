const mongoose = require('mongoose');
const PlayerSchema = require('./player.model')
const GameSchema = require('./game.model')

const ConnectorSchema = new mongoose.Schema({
    player:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player', // Reference to the Player model
        required: true
    },
    game: {
        type: Number,
        ref: 'Game', // Reference to the Game model
        required: true
    },
    // status:{
    //     type: String,
    //     enum: { values: ['playing', 'undecided', 'not playing'] },
    //     default: 'undecided',
    // }
    status:{
        type: Boolean,
        required: true
    }
}, { timestamps: true });
module.exports = mongoose.model('Connector', ConnectorSchema);