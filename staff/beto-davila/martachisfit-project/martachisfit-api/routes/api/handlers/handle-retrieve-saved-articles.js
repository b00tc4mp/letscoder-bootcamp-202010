const { retrieveSavedArticles } = require('../../../logic')

const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    
    const { headers: { authorization } } = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        retrieveSavedArticles(userId)
            .then(result => res.status(200).json(result))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}