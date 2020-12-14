const Busboy = require('busboy')
const { saveProductImage } = require('../../../logic')

module.exports = (req, res, handleError) => {
    
    const { params: { productId } } = req


    const busboy = new Busboy({ headers: req.headers })

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => 
        saveProductImage(productId, file)
            .catch(handleError)

        //res.status(204).send()

    )
    
    busboy.on('finish', () => res.status(204).send())
    
    req.pipe(busboy)
}