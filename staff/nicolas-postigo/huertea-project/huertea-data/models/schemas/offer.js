const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    owner: {
        type: ObjectId,
        required: true
    }, 

    titleoffer: {
        type: String,
        required: true
    },
    
    offername: {
        type: String,
        unique: true
    },

    offeraddress: {
        type: String,
        required: true
    },

    phonecontact: {
        type: String,
        required: true
    },

    emailcontact: {
        type: String,
        required: true
    },
/*     image: {
        type: String,
        required: 'URL can\'t be empty',
        required: true
    }, */

    price: {
        type: Number,
    },
    
/*     city: {
        type: String,
        required: true
    },


    location: {
        type: point,
        required: true
    } */
    //TODO PONER LOCALIZACIÓN
})