const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('geogin-errors')
const { models: { Game, Quest } } = require('geogin-data')

/**
 * Retrieve user
 * 
 * @param {string} gameId game id
 * 
 * @throws {NotFoundError} user doesn't exist
 * 
 * @return {object} user data
 */

module.exports = function (gameId) {
    validateId(gameId)

    return Game
    .findById(gameId)
    .lean()
    .populate("quest")
    .lean()
        .then(game => {
            if (!game) throw new NotFoundError(`game with id ${gameId} not found`)
            return game
        })
}
