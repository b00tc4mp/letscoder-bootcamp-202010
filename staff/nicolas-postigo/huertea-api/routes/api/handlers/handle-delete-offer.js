const { deleteOffer } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: { offerId, offername, titleoffer, price } } = req

    const token = authorization.replace('Bearer ', '')
    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)

        deleteOffer(  ownerId, offerId, offername, titleoffer, price)
            .then(() => res.status(204).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}