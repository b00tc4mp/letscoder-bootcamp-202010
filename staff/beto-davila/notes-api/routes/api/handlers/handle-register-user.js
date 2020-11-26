const { registerUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { body: { fullname, email, password } } = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        registerUser(fullname, email, password)
        .then(() => res.status(201).send())
        .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}