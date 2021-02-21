const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('gameloop-errors')
const { models: { Game } } =require('gameloop-data')

/**
 * Delete a game by its id
 * 
 * @param {string} gameId 
 *  
 * @returns {Promise} with empty object
 * 
 * @throws {NotFoundError} if the gameId does not exist
 */

module.exports = function (gameId) {
    validateId(gameId)

    return Game.findByIdAndRemove(gameId).lean()
        .then(game => {
            if (!game) throw new NotFoundError(`game with id ${gameId} not found`)
            return {}
        })
}