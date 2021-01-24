const { savePictogram } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: { pictogramId, title, description}} = req

    // Bearer <token>
    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)
        
        savePictogram(pictogramId, ownerId, title, description)
            .then((pictogramId) => res.status(200).json({pictogramId}))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}