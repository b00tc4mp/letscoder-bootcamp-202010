const { retrieveNotes } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization } } = req

    // Bearer <token>
    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        retrieveNotes(userId, (error, notes) => {
            if (error) return handleError(401, error)

            res.status(200).json(notes)
        })
    } catch (error) {
        handleError(400, error)
    }
}