const { Schema } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },

    calories: {
        type: Number,
        required: true,
    },

    carbs: {
        type: Number,
        required: true,
    },

    protein: {
        type: Number,
        required: true,
    },

    fats: {
        type: Number,
        required: true,
    }

})