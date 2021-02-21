const { registerUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { body: { userName, email, password, address, city, phone, description } } = req

    try {
        registerUser(userName, email, password, address, city, phone, description )
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}