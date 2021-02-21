const { deleteProduct } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET, JWT_EXP }} = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, params: { productId } } = req

    const token = authorization.replace('Bearer ', '')
    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)

        deleteProduct(ownerId, productId)
            .then(product => res.status(200).json(product))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}