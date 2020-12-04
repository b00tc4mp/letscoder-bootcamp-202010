const { registerUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    debugger
    const { body: { email, fullname, password } } = req

    try {
        registerUser(email, fullname, password)
            .then(() => {
                debugger
                return res.status(201).send()})
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}