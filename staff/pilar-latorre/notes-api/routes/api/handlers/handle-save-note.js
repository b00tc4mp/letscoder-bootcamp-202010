const { saveNote } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: { noteId, text, tags, visibility } } = req

    // Bearer <token>
    const token = authorization.replace('Bearer ', '')
    
    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)

        saveNote(noteId, text, tags, ownerId, visibility)
            .then(() => res.status(200).send())
            .catch(error => handleError(409, error))
    } catch (error) {
        handleError(400, error)
    }
} 
