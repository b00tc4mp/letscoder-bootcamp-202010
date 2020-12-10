const { toggleLikePictogram } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: {likeId}} = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        
        toggleLikePictogram(userId, likeId)
            .then((likeId) => res.status(200).json({likeId}))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}