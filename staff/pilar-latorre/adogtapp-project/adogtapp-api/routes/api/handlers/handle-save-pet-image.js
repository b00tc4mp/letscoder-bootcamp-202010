const Busboy = require('busboy')
const { savePetImage } = require('../../../logic')

const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET }} = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, params: { petId } } = req

    const token = authorization.replace('Bearer ', '')

    const busboy = new Busboy({ headers: req.headers })

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        try {
            const { sub: userId } = jwt.verify(token, JWT_SECRET)
            savePetImage(userId, petId, file)
                .then(() => res.status(204).send())
                .catch(handleError) 
        }catch(error){
            handleError(error)
        }

    })    

    req.pipe(busboy)

}