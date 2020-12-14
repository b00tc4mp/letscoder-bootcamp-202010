const { retrieveGame } = require('../../../logic')

module.exports = (req, res, handleError) => {
debugger
    const { params: { gameId } } = req
   
    try {
        retrieveGame(gameId)
            .then(game => res.status(200).json(game))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}