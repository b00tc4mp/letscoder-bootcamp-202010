const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('geogin-errors')
const { models: { Game, Quest } } = require('geogin-data')

/**
 * Retrieve user
 * 
 * @param {string} gameId user id
 * 
 * @throws {NotFoundError} if user id dos not exist
 * 
 * @return {object} user object
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
