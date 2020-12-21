const { registerUser } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { body: { key, fullname, email, password } } = req

    try {
        registerUser(key, fullname, email, password)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}