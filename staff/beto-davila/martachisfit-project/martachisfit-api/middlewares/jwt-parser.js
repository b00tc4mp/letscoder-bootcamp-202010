const handleRetrieveChosenArticle = require("../routes/api/handlers/handle-retrieve-chosen-article")

const jwt = require('jsonwebtoken')
const { env: { JWT_SECRET } } = process

module.exports = (req, res, next) => {
    try {
        const { headers: { authorization } } = req

        // Bearer <Token>
        const token = authorization.replace('Bearer ', '')

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        req.userId = userId
        next()
    } catch (error) {
        //handleError(error)
        console.error(error)
    }
}