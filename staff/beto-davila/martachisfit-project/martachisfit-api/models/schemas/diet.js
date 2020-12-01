const { Schema } = require('mongoose')

module.exports = new Schema({
    type: {
        type: String,
        enum: ['Keto', 'Low-carb', 'High-carb', 'vegan'],
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