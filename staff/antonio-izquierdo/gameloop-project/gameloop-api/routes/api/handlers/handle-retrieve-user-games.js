const { retrieveUserGames } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
debugger
    const { headers: { authorization } } = req
   
    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)
        retrieveUserGames(ownerId)
            .then(game => res.status(200).json(game))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}
