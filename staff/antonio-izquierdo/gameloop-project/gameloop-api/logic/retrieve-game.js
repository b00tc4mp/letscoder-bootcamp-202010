//change to retrieve game
const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { Game }  } = require('gameloop-data')

/**
 * Retrieves a game by its id
 * 
 * @param {string} gameId 
 * 
 * @returns {Promise}
 */
module.exports = function(gameId) {
debugger
    validateId(gameId)

    return Game.findById(gameId).lean()
        .then(game => {
            if (!game) throw new NotFoundError(`game with id ${gameId} not found`)

            const { _id } = game

            game.id = _id.toString()
            
            delete game._id
            delete game.__v

            return game
        })
}