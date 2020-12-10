// const { validateProductName, validateProductDescription, validateProductPrice, validateProductGlutenFree, validateProductVegan, validateProductAlergenos, validateProductCategory, validateProductAvailable } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { Product } = require('../models')
// import { Product } from '../models'


module.exports = (productId) => {
    return Promise.resolve()
        .then(() => {
            debugger

            return Product.findById(productId).lean()
                .then(product => {
                    if (!product)
                        throw new NotFoundError(`product with id ${productId} not found`)

                    const {_id } = product

                    product.id = _id.toString()
                    
                    delete product._id
                    debugger
                    return product
                })
        })

}

