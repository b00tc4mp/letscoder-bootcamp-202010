const { findProducts } = require('../../../logic')
const jwt = require("jsonwebtoken")

const { env: { JWT_SECRET }
} = process

module.exports = (req, res, handleError) => {
    

    let { headers: { authorization }, query: { queryCompany, queryProduct, price, priceMin, priceMax } } = req;

    if (price) price = Number(price)
    if (priceMin) priceMin = Number(priceMin)
    if (priceMax) priceMax = Number(priceMax)

    let userId

    if (authorization) {

        const token = authorization.replace('Bearer ', '')
        
            if (token !== 'undefined') {
                
            const { sub } = jwt.verify(token, JWT_SECRET)

            userId = sub }
        }

    try {

        findProducts(userId, queryCompany, queryProduct, price, priceMin, priceMax)
            .then(products => res.status(200).json(products))
            .catch(handleError)

    } catch (error) {
        handleError(error)
    }
}
