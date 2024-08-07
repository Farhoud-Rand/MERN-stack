const mongoose = require('mongoose');
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [10, "Setup must be at least 10 characters long"] 
    },
    punchline: {
        type: String,
        minlength: [3, "Punchline must be at least 3 characters long"] 
    }
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;