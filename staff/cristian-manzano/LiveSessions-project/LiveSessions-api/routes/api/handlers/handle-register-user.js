const { registerUser } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { body: { fullname, email, password, role } } = req

    try {
        registerUser(fullname, email, password, role)
            .then(() => {
                return res.status(201).send()})
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}