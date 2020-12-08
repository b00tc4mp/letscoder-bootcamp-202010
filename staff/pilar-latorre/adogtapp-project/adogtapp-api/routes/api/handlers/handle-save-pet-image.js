const Busboy = require('busboy')
const { savePetImage } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { params: { petId } } = req

    const busboy = new Busboy({ headers: req.headers })

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => 
        savePetImage(petId, file)
            .catch(handleError) 

    )

    busboy.on('finish', () => res.status(204).send())

    req.pipe(busboy)

}