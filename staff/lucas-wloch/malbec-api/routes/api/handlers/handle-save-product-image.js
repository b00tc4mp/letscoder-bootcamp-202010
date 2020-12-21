const Busboy = require('busboy')
const { saveProductImage } = require('../../../logic')

const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { params: { productId }, headers: { authorization } } = req

    const token = authorization.replace('Bearer ', '')
    const { sub: userId } = jwt.verify(token, JWT_SECRET)

    const busboy = new Busboy({ headers: req.headers })

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) =>
        saveProductImage(userId, productId, file)
            .then(() => res.status(204).send())
            .catch(handleError)
    )

    req.pipe(busboy)
}