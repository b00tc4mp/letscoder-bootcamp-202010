const { models: { Product } } = require('malbec-data')

module.exports = (category) => {
    return Promise.resolve()
        .then(() => {
            debugger

            return Product.find({ category }).lean()
                .then(products => {
                    debugger
                    if (products)
                        products = products.map(({ _id, name, description, price, glutenFree, vegan, alergenos, category, available }) => ({ id: _id.toString(), name, description, price, glutenFree, vegan, alergenos, category, available }))

                    return products
                })
        })

}


    //user = new User({ fullname, email, password })
    // return user.save()

    //user = { fullname, email, password }
    //return new User(user).save()
    //return User.create(user)




    // var i = 0
    // let results = {}
    // const categories = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"]
    // return new Promise((resolve, reject) => {

    //     for (category of categories) {
    //         debugger
    //         let products = Product.find({ category })._transforms
    //         if (products)
    //             products = products.map(({ _id, name, description, price, glutenFree, vegan, alergenos, category, available }) => ({ id: _id.toString(), name, description, price, glutenFree, vegan, alergenos, category, available }))

    //         results[category] = products ? products : []
    //         i++
    //         //TODO arreglar semantica o fijarse si anda cuando tenga productos

    //         if (i === categories.length) return resolve(results)
    //     }

    // })