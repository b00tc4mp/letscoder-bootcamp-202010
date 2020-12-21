const { validateId, validateText, validatePrice, validateGameconsole} = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { User, Game }, mongoose: { Types: { ObjectId } } } = require('gameloop-data')

module.exports = function( gameId, name, description, gameconsole, budget, ownerId) {
    if (typeof gameId !== 'undefined') validateId(gameId)
    if (typeof name !== 'undefined')validateText(name)
    if (typeof description !== 'undefined')validateText(description)
    if (typeof gameconsole !== 'undefined')validateGameconsole(gameconsole)
    if (typeof budget !== 'undefined')validatePrice(budget)
    if (typeof ownerId !== 'undefined') validateId(ownerId)

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