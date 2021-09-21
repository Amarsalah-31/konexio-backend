const mongoose = require('mongoose');
const authors = require('../routers/authorsRouter');

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    books:{
        type:Array,
        required: true,
    }
});
const Authors = mongoose.data('authors', AuthorsSchema);

module.exports = authors;