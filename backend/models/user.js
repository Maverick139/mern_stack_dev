const mongoose = require('mongoose');

let User = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    persona: {
    	type: String
    },
    password: {
    	type: String
    }
});

module.exports = mongoose.model('User', User);