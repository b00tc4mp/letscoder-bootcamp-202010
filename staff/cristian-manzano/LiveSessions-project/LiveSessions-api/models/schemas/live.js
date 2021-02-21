const { Schema } = require('mongoose')
const {
    Types: { ObjectId },
  } = Schema;

module.exports = new Schema({ 
    
    title: {
        type: String,
        required: true,
    },

    liveDate: {
        type: String
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

    promoterId: {
        type: ObjectId,
        require: true
    },

    artistId: {
        type: ObjectId,
        require: true
    },

    duration: {
        type: String
    },

    description: {
        type: String,
        required: true,
    },

    payment: {
        type: String,
        required: true
    }
})