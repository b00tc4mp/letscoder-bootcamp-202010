const { saveGame } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body:{ gameId, name, description, gameconsole, budget }} = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)

        saveGame(ownerId, gameId, name, description, gameconsole, budget)
        .then((gameId) => res.status(200).json({gameId}))
        .catch(handleError)
    } catch(error) {
        handleError(error)
    }
} 