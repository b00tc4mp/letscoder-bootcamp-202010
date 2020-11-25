const { retrieveNotes } = require('../../../logic')
const jwt = require('jsonwebtoken')


const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    
    const { headers: { authorization } } = req
    
    const token = authorization.replace('Bearer ','')
    debugger
    const { sub: userId } = jwt.verify(token, JWT_SECRET)

    try {
        retrieveNotes(userId)
        .then(notes => res.status(200).json(notes))
        .catch(error => handleError(401, error))
    } catch (error) {
        handleError(400, error)
    }
}
