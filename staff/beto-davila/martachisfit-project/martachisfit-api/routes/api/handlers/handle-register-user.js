const { registerUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    try {
        const { body: { fullname, email, password, calories } } = req

        registerUser(fullname, email, password, calories)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}