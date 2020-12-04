const { registerUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    debugger
    const { body: { email, artistName, password } } = req

    try {
        registerUser(email, artistName, password)
            .then(() => {
                debugger
                return res.status(201).send()})
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}