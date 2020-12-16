const { savePictureUser } = require('../../../logic')
const Busboy = require('busboy')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    const { headers: { authorization } } = req

    const token = authorization.replace('Bearer ', '')

    const busboy = new Busboy({ headers: req.headers })

    const { sub: userId } = jwt.verify(token, JWT_SECRET)

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) =>
        savePictureUser(userId, file)
            .then(() => res.status(204).send())
            .catch(handleError)
    )

    req.pipe(busboy)
}