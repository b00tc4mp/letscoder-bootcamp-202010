const { Schema, ObjectId } = require('mongoose')

module.exports = new Schema({
    level: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: true
    },

    name: {
        type: String,
        required: true
    },

    daysWeek: {
        type: String,
        enum: ['3', '4', '5'],
        required: true
    },

    layout: {
        type: String,
        required: true
    },

    setsWeek: {
        type: String
    },

    description:{
        type: String,
    },

    trainee: {
        type: [ ObjectId ]
    }

})