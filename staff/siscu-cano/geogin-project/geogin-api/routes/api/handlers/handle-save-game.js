const { saveGame } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: {
        gameId, 
        questId, 
        qrCode, 
        teams, 
        players, 
        progress
        } } = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: organizerId } = jwt.verify(token, JWT_SECRET)
        
        console.log({ gameId, 
            qrCode, 
            teams, 
            players, 
            questId, 
            progress,
            organizerId})

        saveGame(gameId, organizerId, questId, qrCode, teams, players, progress)
            .then(gameId => res.status(200).send({ gameId }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}