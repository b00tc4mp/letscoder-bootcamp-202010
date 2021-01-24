const { findPictogramByUser } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization } } = req

    const token = authorization.replace('Bearer ', '')

    
    
    try {
        const { sub: id } = jwt.verify(token, JWT_SECRET)
        findPictogramByUser(id)
            .then((response) =>res.status(200).json(response))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}