const { saveNote } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: { noteId, text, tags, visibility } } = req

    // Bearer <token>
    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)
        
        saveNote(ownerId, noteId, text, tags, visibility)
            .then(() => res.status(200).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}