const { retrieveRecipes } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    
    const { headers: { authorization }} = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        retrieveRecipes(userId)
            .then(recipe => res.status(200).json(recipe))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}