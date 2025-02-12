
const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
// mongodb+srv://Rand:<password>@cluster0.porg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const uri = `mongodb+srv://${username}:${pw}@cluster0.porg6.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
