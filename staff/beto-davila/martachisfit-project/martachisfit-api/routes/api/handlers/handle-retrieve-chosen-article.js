const { retrieveChosenArticle } = require('../../../logic')

const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    try {
        const { headers: { authorization }, params: { articleId } } = req

        const token = authorization.replace('Bearer ', '')
        debugger
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        retrieveChosenArticle(userId, articleId)
            .then(result => res.status(200).json(result))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}