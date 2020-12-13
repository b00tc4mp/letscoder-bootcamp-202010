const { retrieveUser } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization } } = req

    // Bearer <token>
    const token = authorization.replace('Bearer ', '')



    try {
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        
        retrieveUser(userId)
         .then(user => res.status(200).json(user))
         .catch(error => handleError(401, error))

    } catch (error) {
        handleError(400, error)
    }
}