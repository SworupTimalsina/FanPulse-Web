require('dotenv').config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on('error', (err) => {
    console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once('open', () => {
    console.log("MongoDB Connected");
});

const app = require('./app');

app.listen(3000, () => {
    console.log("Server Listening on port 3000");
});