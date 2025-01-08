const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required!'
    },
    email: {
        type: String,
        required: 'Email is required!'

    },
    password: {
        type: String,
        required: 'Password is required!'
    },
},
    {
        timeStamp: true,
    }
);

module.exports = mangoose.model('User', userSchema);