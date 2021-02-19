const { retrieveNoteImage } = require('../../../logic')

module.exports = (req, res, next, handleError) => {
    const { params: { noteId } } = req

    try {
        retrieveNoteImage(noteId)
            .then(stream => {
                res.setHeader('Content-type', 'image/jpeg')

                stream.pipe(res)

                stream.on('error', handleError)
            })
    } catch (error) {
        handleError(error)
    }
}