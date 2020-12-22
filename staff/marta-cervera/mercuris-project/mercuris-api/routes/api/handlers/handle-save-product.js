const { saveProduct } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    const { headers: { authorization }, body: { productId, name, description, price } } = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)

        saveProduct(ownerId, productId, name, description, price)
            .then((productId) => res.status(200).json({ productId }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}