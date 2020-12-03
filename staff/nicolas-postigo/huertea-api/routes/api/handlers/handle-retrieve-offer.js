const { retrieveOffer } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization } } = req

    const token = authorization.replace('Bearer ', '')
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        const { sub: offerId } = jwt.verify(token, JWT_SECRET)

        retrieveOffer(offerId)
            .then((offers) => res.status(200).json(offers))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}
