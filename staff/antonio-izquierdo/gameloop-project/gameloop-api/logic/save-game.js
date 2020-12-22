const { validateId, validateText, validatePrice, validateGameConsole} = require('./helpers/validations')
const { NotFoundError } = require('gameloop-errors')
const { models: { User, Game }, mongoose: { Types: { ObjectId } } } = require('gameloop-data')

/**
 *  Upload game
 * 
 * @param {string} userId user's identification number(ObjectId)
 * @param {string} gameId game's identification number(ObjectId)
 * @param {Stream} name game's name
 * @param {Stream} description game's description
 * @param {Stream} gameconsole game's gameconsole
 * @param {Stream} color game's color
 * 
 * @returns {Promise} returns a promise with the game info
 */

module.exports = function( ownerId, gameId, name, description, gameconsole, budget ) {
    validateId(ownerId)
    if (typeof gameId !== 'undefined') validateId(gameId)
    validateText(name)
    validateText(description)
    validateGameConsole(gameconsole)
    validatePrice(budget)

    const _id = ObjectId(ownerId)

    return User
        .findById({_id})
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

            if (gameId) {

                const _id = ObjectId(gameId)

                return Game
                    .findById({_id})
                    .then(game => {
                        if (!game) throw new NotFoundError(`game with id ${gameId} not found`)

                        return Game
                            .updateOne({ _id}, { $set: { name, description, budget } } )
                            .then(result => result.id)
                    })
            } else
                return Game.create({ name, description, gameconsole, budget, owner: ObjectId(ownerId) })
                    .then(result => result.id)
        })
}