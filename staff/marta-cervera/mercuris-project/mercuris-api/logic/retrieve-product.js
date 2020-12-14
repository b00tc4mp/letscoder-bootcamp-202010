const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const {models : { Product, User } }= require('mercuris-data')

module.exports = ownerId => {    
    validateId(ownerId)


    return User.findById(ownerId).lean()
        .then(user=>{
            if(!user) new NotFoundError(`user with id ${ownerId} not found`)

            return Product.find({ owner: ownerId }).lean()
        })
        .then(products => {
            products.forEach(product =>{
                const {_id} = product
                product.id =_id.toString()

                delete product._id
                delete product.owner
            })

            return products
        })
}