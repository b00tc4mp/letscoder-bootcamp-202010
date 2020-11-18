const { authenticateUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { body: { email, password } } = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        authenticateUser(email, password, (error, id) => {
            if (error) return handleError(409, error)

            res.status(200).send(id)
        })
    } catch (error) {
        handleError(401, error)
    }
}