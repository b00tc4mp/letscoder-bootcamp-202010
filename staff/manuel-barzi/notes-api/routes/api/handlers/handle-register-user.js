const { registerUser } = require('../../../logic')

module.exports = (req, res, next, handleError) => {
    const { body: { fullname, email, password } } = req

    try {
        registerUser(fullname, email, password)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}