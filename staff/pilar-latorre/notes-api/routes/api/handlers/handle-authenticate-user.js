const { authenticateUser } = require('../../../logic')


module.exports = (req, res, handleError) => {
    const { body: { email, password } } = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        authenticateUser(email, password, (error, id) => {
            if (error) return handleError(401, error)


            res.status(200).json({ token: id })
        })
    } catch (error) {
        handleError(400, error)
    }
}