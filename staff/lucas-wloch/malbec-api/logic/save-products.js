const { validateId, validateProductName, validateProductDescription, validateProductPrice, validateProductGlutenFree, validateProductVegan, validateProductAlergenos, validateProductCategory, validateProductAvailable } = require('./helpers/validations')
const { ConflictError, NotFoundError } = require('../errors')
const { Product, User } = require('../models')


module.exports = (userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available) => {
    if (typeof productId !== "undefined") validateId(productId)
    if (typeof userId !== "undefined") validateId(userId)
    validateProductName(name)
    validateProductDescription(description)
    validateProductPrice(price)
    validateProductGlutenFree(glutenFree)
    validateProductVegan(vegan)
    validateProductAlergenos(alergenos)
    validateProductCategory(category)
    validateProductAvailable(available)
    debugger
    return User.findById(userId).lean()
        .then(user => {
            if (user) {
                if (!productId) {
                    // return Product.findOne({ $or: [{ name }, { description }] })
                    return Product.findOne({ name, category, description })
                        .then(product => {
                            if (product) throw new ConflictError(`product with name ${name} already exists`)

                            return Product.create({ name, description, price, glutenFree, vegan, alergenos, category, available })
                                .then(product => product.id)
                        })
                } else {
                    return Product.findById(productId)
                        .then(product => {
                            if (!product) throw new NotFoundError(`product with id ${productId} not found`)

                            product.name = name
                            product.description = description
                            product.price = price
                            product.glutenFree = glutenFree
                            product.vegan = vegan
                            product.alergenos = alergenos
                            product.category = category
                            product.available = available


                            return product.save()

                        })
                        .then(product => product.id)
                }
            }

        })

}