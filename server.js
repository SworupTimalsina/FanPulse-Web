require('dotenv').config();

const app = require('./app');

app.listen(8000, () => {
    console.log("Server Listening on port 8000");
});