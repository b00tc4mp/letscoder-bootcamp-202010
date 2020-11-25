const { saveNote } = require('../../../logic')
const handleAuthenticateUser = require('./handle-authenticate-user')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process



module.exports = (req, res, handleError) => {
    const { body: { noteId, text, tags, visibility }, headers: { authorization } } = req

    const token = authorization.replace('Bearer ', '')


    try {

        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)
        saveNote(noteId, text, tags, ownerId, visibility)
        
            .then(() => res.status(201).send())
            .catch(error => handleAuthenticateUser(500, error))
          
        
    } catch (error) {
        handleError(400, error)
    }
}



