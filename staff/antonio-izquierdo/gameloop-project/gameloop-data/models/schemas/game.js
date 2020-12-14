const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    budget: {
        type: Number,
        required: true,
        validate: {
            validator: value => { return value >= 0 },
            message: props => `${props.value} negative numbers are not allowed`
        } 
    },

    owner: {
        type: ObjectId,
        required: true
    },

    gameconsole: {
        type: String,
        enum: ['game boy', 'game boy advance', 'game boy color', 'nintendo ds', 'nintendo 3ds', 'nintendo switch', 'wii', 'wii u', 'play station 1', 'play station 2', 'play station 3', 'play station 4', 'play station 5', 'xbox', 'xbox 360', 'xbox one'],
        default: 'nintendo',
        required: true
    }
})