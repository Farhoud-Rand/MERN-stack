const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const GameSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true, // Ensure the id is unique
    },
    
}, { timestamps: true });

// Add the auto-increment plugin to the schema
GameSchema.plugin(AutoIncrement, { id: 'game_seq', inc_field: 'id', start_seq: 1 });

module.exports = mongoose.model('Game', GameSchema);