const { saveNote } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: { noteId, text, tags, visibility } } = req



    const ownerId = authorization.replace('Bearer ', '')

    try {
        saveNote(ownerId, noteId, text, tags, visibility)
            .then(() => res.status(200).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}