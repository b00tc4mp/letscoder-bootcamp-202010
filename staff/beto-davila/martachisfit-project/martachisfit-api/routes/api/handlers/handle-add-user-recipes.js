const jwt = require('jsonwebtoken')
const { addUserRecipes } = require('../../../logic')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    try {
        const { headers: { authorization } } = req

        const token = authorization.replace('Bearer ', '')

        const recipeId = req.body.savedRecipes[0]

        // res.setHeader('Access-Control-Allow-Origin', '*')
        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        addUserRecipes(userId, recipeId)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}