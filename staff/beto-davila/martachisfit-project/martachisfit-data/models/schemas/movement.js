const { Schema } = require('mongoose')

module.exports = new Schema({

    name: {
        type: String,
        required: true
    },

    group: {
        type: String,
        enum: ['pierna', 'hombro', 'biceps', 'triceps', 'abdomen', 'espalda', 'pectoral', 'gemelo'],
        required: true
    },

    urlPathImg: {
        type: String,
        required: true
    } 

})