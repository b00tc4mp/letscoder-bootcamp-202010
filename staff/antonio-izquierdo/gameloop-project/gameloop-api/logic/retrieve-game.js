//change to retrieve game
const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('gameloop-errors')
const { models: { Game, User } } = require('gameloop-data')

/**
 * Retrieves a game by its id
 * 
 * @param {string} gameId 
 * 
 * @returns {Promise} game and user info
 * 
 * @throws {NotFoundError} if the gameId does not exist
 */

module.exports = function (gameId) {
    validateId(gameId)

    return Game.findById(gameId).lean()
        .then(game => {
            if (!game) throw new NotFoundError(`game with id ${gameId} not found`)
            const { owner } = game
            const ownerId = owner.toString()

            return User.findById(ownerId).lean()
                .then(user => {
                    const { _id } = game

                    game.id = _id.toString()

                    delete game._id
                    delete game.__v

                    return { ...game, ...user }
                })
        })
}
