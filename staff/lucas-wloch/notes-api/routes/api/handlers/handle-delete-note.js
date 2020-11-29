const { deleteNote } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    const { body: { noteId }, headers: { authorization } } = req

    const token = authorization.replace('Bearer ','')
    
    const { sub: userId } = jwt.verify(token, JWT_SECRET)

    try {
        deleteNote(userId, noteId)
            .then(result => res.status(200).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}
