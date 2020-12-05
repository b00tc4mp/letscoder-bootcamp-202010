const { createOffer } = require('../../../logic/')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: { offerId, offername, titleoffer, image, price } } = req

    const token = authorization.replace('Bearer ', '')
    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)

        createOffer(  ownerId, offerId, offername, titleoffer, image, price)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}