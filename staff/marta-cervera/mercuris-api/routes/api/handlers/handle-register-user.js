const { registerUser } = require('../../../logic')

module.exports = ( req, res, handleError) => {
    const { body: { name, email, password}} = req

    try{
        registerUser(name, email, password)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}