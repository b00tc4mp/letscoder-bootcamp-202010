require('dotenv').config()
const mongoose = require('mongoose')
const { Menu } = require('../models')
const { Types: { ObjectId } } = mongoose
const saveMenu = require('./save-menu')

const { env: { MONGODB_URL } } = process

const findMenu = () => {
    // const options = [
    //     { path: 'entrantes', populate: 'parrilla', model: 'Product'}
    // ]
    const options = [
        {path: 'entrantes.parrilla entrantes.empanadas entrantes.ensaladas', model: 'Product'},
        {path: 'principales.parrilla principales.pescados principales.otrasSugerencias', model: 'Product'},
        {path: 'bebidas.aguasRefrescos bebidas.vinos bebidas.cervezas bebidas.tragos', model: 'Product'},
        {path: 'postres', model: 'Product'}
    ]

    return Menu.find().sort({ date: -1 }).lean().populate(options)
}

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    const menu = {
        date: Date.now(),
        entrantes: {
            parrilla: [ObjectId("5fd39eac9923692dd4cc4c86"), ObjectId("5fd39ed39923692dd4cc4c87")],
            empanadas: [ObjectId("5fd273fe6e06c444d854d6c6")],
            ensaladas: [ObjectId("5fd273fe6e06c444d854d6c6")]
        },
        principales: {
            parrilla: [ObjectId("5fd273fe6e06c444d854d6c6")],
            pescados: [ObjectId("5fd273fe6e06c444d854d6c6")],
            otrasSugerencias: [ObjectId("5fd273fe6e06c444d854d6c6")]
        },
        bebidas: {
            aguasRefrescos: [ObjectId("5fd273fe6e06c444d854d6c6")],
            vinos: [ObjectId("5fd273fe6e06c444d854d6c6")],
            cervezas: [ObjectId("5fd273fe6e06c444d854d6c6")],
            tragos: [ObjectId("5fd273fe6e06c444d854d6c6")]
        },
        postres: [ObjectId("5fd273fe6e06c444d854d6c6")]
    }
    return menu
})
    .then((menu) => saveMenu("5fc61cc871c3ab8240aecd97", menu))
    // .then(() => findMenu())
    // .then(([menu]) => menu)
    // .then(([menu]) => {
    //     const entrantes = menu.entrantes
    //     return entrantes
    // })
    .then(console.log)
    .catch(error => console.error(error))
    .then(mongoose.disconnect)

