const { validateId, validateText, validatePrice} = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { User } = require('../models')
const { Game } = require('../models')

module.exports = function( name, description, budget, ownerId ) {
    validateText(name)
    validateText(description)
    validatePrice(budget)
    validateId(ownerId)
    if (typeof ownerId !== 'undefined') validateId(ownerId)

    return User.findById(ObjectId())
        .findOne({ _id })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

            if (gameId) {

                const _id = ObjectId(gameId)

                return Game
                    .findById({_id})
                    .then(note => {
                        if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

                        return notes
                            .updateOne({ _id }, { $set: { text, tags, visibility } })
                            .then(result => undefined)
                    })
            } else
                return notes.insertOne({ text, tags, visibility, owner: ObjectId(ownerId), date: new Date })
                    .then(result => undefined)
        })
}