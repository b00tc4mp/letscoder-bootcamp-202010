const saveProducts = require("../../../logic/save-products")
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { body: { productId, name, description, price, glutenFree, vegan, alergenos, category, available },
headers: { authorization } } = req

    const token = authorization.replace('Bearer ', '')

    const { sub: userId } = jwt.verify(token, JWT_SECRET)


    debugger
    try {
        saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available)
            .then((productId) => res.status(201).send({productId}))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}