const { retrieveUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { headers: { authorization } } = req

    // Bearer <token>
    const userId = authorization.replace('Bearer ', '')

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        retrieveUser(userId, (error, user) => {
            if (error) return handleError(401, error)

            res.status(200).json(user)
        })
    } catch (error) {
        handleError(400, error)
    }
}