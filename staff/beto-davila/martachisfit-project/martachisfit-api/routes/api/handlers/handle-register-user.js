const { registerUser } = require('../../../logic')

module.exports = (req, res) => {
    const { body: { fullname, email, password, calories } } = req

    try {
        registerUser(fullname, email, password, calories)
            .then(() => res.status(201).send())
            .catch(console.error)
    } catch (error) {
        console.error(error.message)
    }
}