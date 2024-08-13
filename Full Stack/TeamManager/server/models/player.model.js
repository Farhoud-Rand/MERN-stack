const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required"],
        minLength: [2, "Player name must be at least two character"]},
    position:{
        type: String,
        enum: { values: ['goalkeeper', 'defender', 'midfielder','attacker'], message: 'Position is either: goalkeeper, defender, midfielder or attacker' },
    }
}, { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);