const { deleteNote } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { body: { noteId } } = req

    try {
        deleteNote(noteId)
            .then(result => res.status(200).send())
            .catch(error => handleError(401, error))
    } catch (error) {
        handleError(400, error)
    }
}
