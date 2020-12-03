const { saveGame } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body:{ gameId, name, description, budget }} = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)

        saveGame(gameId, name, description, budget, ownerId)
            .then(() => res.status(200).send())
            .catch(handleError)
    } catch(error) {
        handleError(error)
    }
} 