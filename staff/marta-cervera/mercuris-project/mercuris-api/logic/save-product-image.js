const { validateId } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')
const { models: { User, Product } } = require('mercuris-data')
const { NotFoundError } = require('../errors')



module.exports = (userId, productId, stream) => {
    validateId(userId)
    validateId(productId)
    // TODO validate file

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Product.findById(productId)
                .then(product => {
                    if (!product) throw new NotFoundError(`product with id ${productId} not found`)

                    return new Promise((resolve, reject) => {

                        try {
                            const toStream = fs.createWriteStream(path.join(__dirname, `../data/products/${productId}.jpg`))

                            stream.pipe(toStream)

                            stream.once('end', resolve)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
        })
}

