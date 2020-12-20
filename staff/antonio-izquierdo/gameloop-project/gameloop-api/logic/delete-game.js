const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { Game } } =require('gameloop-data')

/**
 * Retrieves a game by its id
 * 
 * @param {string} gameId 
 * 
 * @returns {Promise}
 */
module.exports = function (gameId) {
    validateId(gameId)

    return Game.findByIdAndRemove(gameId).lean()
        .then(game => {
            if (!game) throw new NotFoundError(`game with id ${gameId} not found`)
            return {}
        })
}