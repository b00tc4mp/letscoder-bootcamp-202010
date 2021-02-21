const { deleteGame } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { params: {gameId} } = req

    try {
        deleteGame(gameId)
            .then(game => res.status(200).json(game))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}