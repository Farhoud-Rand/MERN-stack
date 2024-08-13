const express = require('express'); //To import express
const cors = require('cors');       // To import cors
const app = express();              // is the starting point of setting up your Express application, //allowing you to define routes, configure middleware, and start your serve
require('dotenv').config();         // To import dotenv
const port = process.env.PORT;      //To retrieve the port and use it
require('./config/mongoose.config');  // Importing the config file
app.use(cors());                    // To allow our express project to communicate with client side
app.use(express.json());            // This is in order to allow POST data
app.use(express.urlencoded({ extended: true })); // This is in order to allow POST data
require('./routes/player.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`));