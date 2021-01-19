const { saveNote } = require('../../../logic')

module.exports = (req, res, next, handleError) => {
    try {
        const { userId, body: { noteId, text, tags, visibility } } = req

        saveNote(userId, noteId, text, tags, visibility)
            .then(noteId => res.status(200).send({ noteId }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}