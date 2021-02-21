const jwt = require('jsonwebtoken')
const { addUserArticles } = require('../../../logic')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    try {
        const { headers: { authorization } } = req

        const token = authorization.replace('Bearer ', '')

        const articleId = req.body.savedArticles[0]

        // res.setHeader('Access-Control-Allow-Origin', '*')
        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        addUserArticles(userId, articleId)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}