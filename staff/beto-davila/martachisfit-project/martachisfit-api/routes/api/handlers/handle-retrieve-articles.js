const { retrieveArticles } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    try {
        const { headers: { authorization } } = req

        const token = authorization.replace('Bearer ', '')

        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        retrieveArticles(userId)
            .then(article => res.status(200).json(article))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}