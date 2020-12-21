const { models: { Menu, User, Product } } = require('malbec-data')


module.exports = (userId) => {

    return User.findById(userId).lean()
        .then(user => {
            if (user) {
                debugger
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
                    .then(_menu => {
                        debugger
                        const { entrantes, principales, bebidas, postres } = _menu

                        return Menu.findOne()
                            .then(menu => {
                                if (menu) {
                                    menu.date = Date.now()

                                    menu.entrantes = entrantes

                                    menu.principales = principales

                                    menu.bebidas = bebidas

                                    menu.postres = postres

                                    return menu.save()
                                }

                                return Menu.create(_menu)
                            })
                            .then((menu) => id = menu._id.toString())
                    })
            }
        })
}
