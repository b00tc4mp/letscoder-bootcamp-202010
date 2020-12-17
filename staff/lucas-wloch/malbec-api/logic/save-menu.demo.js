require('dotenv').config()
const { models: { Menu, Product }, mongoose } = require('malbec-data')
const { Types: { ObjectId } } = mongoose
const saveMenu = require('./save-menu')
const findMenu = require('./find-menu')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    return Product.find().lean()
        .then(products => {
            debugger
            let parrilla = products.filter(product => product.category === 'parrilla')
            let pescados = products.filter(product => product.category === 'pescados')
            let empanadas = products.filter(product => product.category === 'empanadas')
            let ensaladas = products.filter(product => product.category === 'ensaladas')
            let entrantesParrilla = products.filter(product => product.category === 'entrantes-parrilla')
            let acompañamientosGuarniciones = products.filter(product => product.category === 'acompañamientos-guarniciones')
            let otrasSugerencias = products.filter(product => product.category === 'otras-sugerencias')
            let postres = products.filter(product => product.category === 'postres')
            let aguasRefrescos = products.filter(product => product.category === 'aguas-refrescos')
            let vinos = products.filter(product => product.category === 'vinos')
            let cervezas = products.filter(product => product.category === 'cervezas')
            let tragos = products.filter(product => product.category === 'tragos')

            const menu = {
                entrantes: {
                    parrilla: entrantesParrilla,
                    empanadas,
                    ensaladas,
                    acompañamientosGuarniciones
                },
                principales: {
                    parrilla,
                    pescados,
                    otrasSugerencias
                },
                bebidas: {
                    aguasRefrescos,
                    vinos,
                    cervezas,
                    tragos
                },
                postres
            }
            return menu
        })
})
    .then((menu) => saveMenu("5fc61cc871c3ab8240aecd97", menu))
    .then(() => findMenu())
    .then(menu => console.dir(menu))
    .catch(error => console.error(error))
    .then(mongoose.disconnect)

