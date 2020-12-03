const { savePet } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: { petId, name, breed, species, color, description } } = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: shelter } = jwt.verify(token, JWT_SECRET)
        
        savePet( petId, name, breed, species, color, description, shelter)
            .then(() => res.status(200).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}