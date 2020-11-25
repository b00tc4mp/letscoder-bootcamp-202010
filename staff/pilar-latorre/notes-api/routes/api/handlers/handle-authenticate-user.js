const { authenticateUser } = require('../../../logic')


module.exports = (req, res, handleError) => {
    const { body: { email, password } } = req

    try {
        authenticateUser(email, password) 

            .then((id) => res.status(200).json({ token: id }))
            .catch (error => handleError(401, error))
  
        
    } catch (error) {
        handleError(400, error)
    }
}