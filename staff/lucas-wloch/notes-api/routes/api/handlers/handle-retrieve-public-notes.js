const { retrievePublicNotes } = require('../../../logic')
const jwt = require('jsonwebtoken')


const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    
    const { headers: { authorization }, body: { follows } } = req
    
    const token = authorization.replace('Bearer ','')
    
    const { sub: userId } = jwt.verify(token, JWT_SECRET)

    try {
        retrievePublicNotes(userId, follows)
        .then(notes => res.status(200).json(notes))
        .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}
