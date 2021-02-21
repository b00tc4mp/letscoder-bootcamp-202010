const { deletePet } = require('../../../logic')
const jwt = require('jsonwebtoken')
const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization },params: {petId} } = req
    const token = authorization.replace('Bearer ', '')
   
    try {

        const { sub: shelter } = jwt.verify(token, JWT_SECRET)
        deletePet(shelter, petId)
            .then(pet => res.status(200).json(pet))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}