const { validateId, validateProductName, validateProductDescription, validateProductPrice, validateProductGlutenFree, validateProductVegan, validateProductAlergenos, validateProductCategory, validateProductAvailable } = require('./helpers/validations')
const { ConflictError, NotFoundError } = require('../errors')
const { Product } = require('../models')


module.exports = (productId, name, description, price, glutenFree, vegan, alergenos, category, available) => {
    if (typeof productId !== "undefined") validateId(productId)
    validateProductName(name)
    validateProductDescription(description)
    validateProductPrice(price)
    validateProductGlutenFree(glutenFree)
    validateProductVegan(vegan)
    validateProductAlergenos(alergenos)
    validateProductCategory(category)
    validateProductAvailable(available)
debugger
    if (!productId)
        return Product.findOne({ $or: [{ name }, { description }] })
            .then(product => {
                if (product) throw new ConflictError(`product with name ${name} already exists`)

                return Product.create({ name, description, price, glutenFree, vegan, alergenos, category, available })
            })
    else
        return Product.findById(productId)
            .then(product => {
                if (!product) throw new NotFoundError(`product with id ${productId} not found`)

                product.name = name
                product.description = description
                product.price = price
                product.glutenFree = glutenFree
                product.alergenos = alergenos
                product.category = category
                product.available = available


                return product.save()
            })

}