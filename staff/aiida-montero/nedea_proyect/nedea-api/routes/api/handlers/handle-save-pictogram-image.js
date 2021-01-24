const Busboy = require('busboy')
const { savePictogramImage } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { params: { pictogramId } } = req

    const busboy = new Busboy({ headers: req.headers })

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => savePictogramImage(pictogramId, file, error => {
        if (error) return handleError(error)

        //res.status(204).send()

    }))
    
    busboy.on('finish', () => res.status(204).send())
    
    req.pipe(busboy)
}