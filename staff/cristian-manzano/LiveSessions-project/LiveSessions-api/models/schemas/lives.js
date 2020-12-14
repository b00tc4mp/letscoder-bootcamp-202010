const { Schema } = require('mongoose')

module.exports = new Schema({ 
    
    title: {
        type: String,
        required: true,
    },
    
    date: {
        type: Date,
    },

    status: {
        type: String,
        required: true,
        enum: ['ACCEPTED', 'DENIED', 'PENDING'],
        default: 'PENDING'
    },

    duration: {
        type: String
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