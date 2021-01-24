const { retrieveFavouritePictogram } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization } } = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: id } = jwt.verify(token, JWT_SECRET)
  
        retrieveFavouritePictogram(id)
            .then(pictogram => res.status(200).json(pictogram))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}