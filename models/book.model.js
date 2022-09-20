const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    author: {
        type: String,
    required: true 
    },

    age: {
        type: Number,
        required: true
    },

    title: {
        type: String,
        required: true 
    },

    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Book', bookSchema);