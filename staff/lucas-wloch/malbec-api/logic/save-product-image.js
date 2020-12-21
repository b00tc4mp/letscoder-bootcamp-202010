const { validateId, validateStream } = require('./helpers/validations')
const { models: { User }, mongoose } = require('malbec-data')
const path = require('path')
const fs = require('fs')

module.exports = (userId, productId, stream) => {
    if (typeof userId !== "undefined") validateId(userId)
    if (typeof productId !== "undefined") validateId(productId)
    validateStream(stream)

    return User.findById(userId).lean()
        .then(user => {
            if (user) {
                return new Promise((resolve, reject) => {
                    try {
                        const toStream = fs.createWriteStream(path.join(__dirname, `../data/products/${productId}.jpg`))

                        stream.pipe(toStream)

                        stream.once('end', resolve)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
        })

}