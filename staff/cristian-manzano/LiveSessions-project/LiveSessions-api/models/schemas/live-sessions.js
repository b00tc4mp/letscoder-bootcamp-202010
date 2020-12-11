const { Schema } = require('mongoose')

module.exports = new Schema({ 
    date: {
        type: Date,
    },

    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    payment: {
        type: Number,
        required: true
    }
})