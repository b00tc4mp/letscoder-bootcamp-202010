const { registerUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { body: { fullname, email, password } } = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        registerUser(fullname, email, password, error => {
            if (error) return handleError(409, error)

            res.status(201).send()
        })
    } catch (error) {
        handleError(400, error)
    }
}