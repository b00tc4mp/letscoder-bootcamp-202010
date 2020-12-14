const { Schema, ObjectId } = require('mongoose')

module.exports = new Schema({
    type: {
        type: String,
        enum: ['keto', 'low-carb', 'mediterranean', 'vegan'],
        required: true
    },

    calories: {
        type: Number,
        required: true
    },

    meals: {
        type: Object,
        required: true
    },

    dieter: {
        type: [ ObjectId ]
    },

    macros: {
        type: Object
    }

})