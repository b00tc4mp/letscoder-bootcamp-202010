const { registerUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { body: { fullname, email, password, address, city, phone } } = req

    try {
        registerUser(fullname, email, password, address, city, phone )
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}