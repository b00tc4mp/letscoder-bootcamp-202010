const { registerUser } = require('../../../logic')

module.exports = ( req, res, handleError) => {
    const { body: {name, email,password, contact, address, city, phone}} = req

    try{
        registerUser(name, email, password, contact, address, city, phone)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}