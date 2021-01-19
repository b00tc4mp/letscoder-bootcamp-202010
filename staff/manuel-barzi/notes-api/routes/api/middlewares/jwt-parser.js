const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, next, handleError) => {
    const { headers: { authorization } } = req

    try {
        // Bearer <token>
        const token = authorization.replace('Bearer ', '')

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        req.userId = userId

        next()
    } catch (error) {
        handleError(error)
    }
}