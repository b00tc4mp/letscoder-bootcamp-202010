const mongoose = require('mongoose')
const menu = require('./schemas/menu')
const { Types: { ObjectId }, Schema, model } = mongoose

const menuSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    entrantes: {
        type: Object,
        parrilla: [{
            type: ObjectId
        }],
        empanadas: [{
            type: ObjectId
        }],
        ensaladas: [{
            type: ObjectId
        }]
    },
    principales: {
        type: Object,
        parrilla: [{
            type: ObjectId
        }],
        pescados: [{
            type: ObjectId
        }],
        otrasSugerencias: [{
            type: ObjectId
        }]
    },
    bebidas: {
        type: Object,
        aguasRefrescos: [{
            type: ObjectId
        }],
        vinos: [{
            type: ObjectId
        }],
        cervezas: [{
            type: ObjectId
        }],
        tragos: [{
            type: ObjectId
        }]
    },
    postres: [{
        type: ObjectId
    }]
})

module.exports = model('Menu', menu)