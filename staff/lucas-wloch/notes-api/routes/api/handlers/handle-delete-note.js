const { deleteNote } = require('../../../logic')

module.exports = (req, res, handleError) => {
    
    const { body: { noteId } } = req

    try {
        deleteNote(noteId, (error, result) => {
            if (error) return handleError(401, error)

            res.status(200).send()
        })
    } catch (error) {
        handleError(400, error)
    }
}
