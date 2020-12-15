const { retrieveGame } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { id: gameId } = req.params
    try {
        retrieveGame(gameId)
            .then(game => res.status(200).json(game))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}