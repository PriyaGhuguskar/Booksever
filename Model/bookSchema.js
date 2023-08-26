const mongoose = require('mongoose');
const localDate = new Date().toJSON().slice(0, 10);

const bookModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is Required']
    },
    author: {
        type: String,
        required: [true, 'Author is Required']
    },
    description: {
        type: String,
        required: [true, 'Description is Required']
    },
    image: {
        type: String,
        required: [true, 'Image Url is Required']
    },
    createdAt: {
        type: Date,
        default: localDate
    }
})

const bookSchemaModel = mongoose.model('Book', bookModel)

module.exports = bookSchemaModel;