const Busboy = require('busboy')
const { saveNoteImage } = require('../../../logic')

module.exports = (req, res, next, handleError) => {
    try {
        const { userId, params: { noteId } } = req

        const busboy = new Busboy({ headers: req.headers })

        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            try {
                saveNoteImage(userId, noteId, file)
                    .then(() => res.status(204).send())
                    .catch(handleError)
            } catch (error) {
                handleError(error)
            }
        })

        req.pipe(busboy)
    } catch (error) {
        handleError(error)
    }

}