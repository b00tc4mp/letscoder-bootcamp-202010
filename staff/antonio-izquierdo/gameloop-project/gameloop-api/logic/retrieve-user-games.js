const { validateId} = require('./helpers/validations')
const { models: { Game }, mongoose : {Types : { ObjectId } } } = require('gameloop-data')

module.exports = function (ownerId) {
    validateId(ownerId)
    
    const cursor = Game.find({ owner : ObjectId(ownerId) })

    return cursor.lean()
        .then(game => {
            game.forEach(game => {
                const { _id } = game

                game.id = _id.toString()

                delete game._id
               
            })
            return game

        })
} 