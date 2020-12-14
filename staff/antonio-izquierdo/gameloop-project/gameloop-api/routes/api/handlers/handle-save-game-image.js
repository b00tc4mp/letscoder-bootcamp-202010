const Busboy = require('busboy')
const { saveGameImage } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { params: { gameId } } = req

    const busboy = new Busboy({ headers: req.headers })

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => 
    saveGameImage(gameId, file)  
    .catch(handleError)    
    )

    busboy.on('finish', () => res.status(204).send())

    req.pipe(busboy)
} 