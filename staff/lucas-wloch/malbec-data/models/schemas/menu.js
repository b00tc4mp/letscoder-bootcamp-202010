const mongoose = require('mongoose')
const { Types: { ObjectId }, Schema } = mongoose


module.exports = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    entrantes: {
        type: Object,
        parrilla: [{
            type: ObjectId,
            ref: 'Product'
        }],
        empanadas: [{
            type: ObjectId,
            ref: 'Product'
        }],
        ensaladas: [{
            type: ObjectId,
            ref: 'Product'
        }]
    },
    principales: {
        type: Object,
        parrilla: [{
            type: ObjectId,
            ref: 'Product'
        }],
        pescados: [{
            type: ObjectId,
            ref: 'Product'
        }],
        otrasSugerencias: [{
            type: ObjectId,
            ref: 'Product'
        }]
    },
    bebidas: {
        type: Object,
        aguasRefrescos: [{
            type: ObjectId,
            ref: 'Product'
        }],
        vinos: [{
            type: ObjectId,
            ref: 'Product'
        }],
        cervezas: [{
            type: ObjectId,
            ref: 'Product'
        }],
        tragos: [{
            type: ObjectId,
            ref: 'Product'
        }]
    },
    postres: [{
        type: ObjectId,
        ref: 'Product'
    }]
})
