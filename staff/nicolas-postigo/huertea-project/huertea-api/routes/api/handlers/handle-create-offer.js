const { createOffer } = require('../../../logic/')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: { offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact } } = req

    const token = authorization.replace('Bearer ', '')
    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)

        createOffer(ownerId, offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact)
            .then((offerId) => res.status(201).json({offerId}))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}