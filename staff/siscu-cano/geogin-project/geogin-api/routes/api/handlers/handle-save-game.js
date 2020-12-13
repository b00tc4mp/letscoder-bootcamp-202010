const { saveGame } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: {
        gameId, 
        qrCode, 
        teams, 
        players, 
        questId, 
        progress
        } } = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: organizerId } = jwt.verify(token, JWT_SECRET)
        
        saveGame(gameId, qrCode, teams, players, questId, progress, organizerId)
            .then(gameId => res.status(200).send({ gameId }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}