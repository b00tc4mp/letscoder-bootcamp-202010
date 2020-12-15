const { modifyPictogram } = require('../../../logic')
const jwt = require('jsonwebtoken')
const pictogram = require('nedea-data/models/schemas/pictogram')

const { env: { JWT_SECRET, JWT_EXP }} = process

module.exports =( req, res, handleError) => {
    const { body: {title, description}, headers: { authorization}} = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: userId }= jwt.verify(token, JWT_SECRET)

        modifyPictogram(userId, PictogramId, title, description)
        .then(pictogram => res.status(200).json(pictogram))
        .catch(handleError)

    }catch(error) {
        handleError(error)
    }
}