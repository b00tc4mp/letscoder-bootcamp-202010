const { findProducts } = require('../../../logic')
const jwt = require("jsonwebtoken")
const { env: { JWT_SECRET }
} = process

module.exports = (req, res, handleError) => {
    const { body: { token, queryCompany,queryProduct, price, priceMin,priceMax } } = req

    let userId

    if (token) {
        const { sub } = jwt.verify(token, JWT_SECRET)
        userId = sub

    } else {
        const userId = undefined
    }

    try {

        findProducts(userId, queryCompany,queryProduct, price, priceMin,priceMax)
            .then(product => res.status(200).json(product))
            .catch(handleError)

    } catch (error) {
        handleError(error)
    }
}
