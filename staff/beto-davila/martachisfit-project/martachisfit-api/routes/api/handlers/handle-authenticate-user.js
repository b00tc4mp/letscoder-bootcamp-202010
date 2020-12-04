const { authenticateUser } = require('../../../logic')
const jwt = require('jsonwebtoken')
const { JWT_SECRET, JWT_EXP } = process.env

module.exports = (req, res, handleError) => {
    const { body: { email, password } } = req

    try {
        authenticateUser(email, password)
            .then(userId => {
                const token = jwt.sign({ sub: userId}, JWT_SECRET, { expiresIn: JWT_EXP})

                res.status(200).json({ token })
            })
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}