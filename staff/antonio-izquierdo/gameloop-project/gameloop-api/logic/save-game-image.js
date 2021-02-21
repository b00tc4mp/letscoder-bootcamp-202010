const { validateId } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')
const { models: { User, Game }, mongoose: { Types: { ObjectId } } } = require('gameloop-data')
const { NotFoundError } = require('gameloop-errors')

/**
 *  Upload game's picture
 * 
 * @param {string} userId game's identification number(ObjectId)
 * @param {string} gameId game's identification number(ObjectId)
 * @param {Stream} stream data image
 * @returns {Promise} empty promise on successful upload 
 * 
 */

module.exports = (userId, gameId, stream) => {
    validateId(userId)
    validateId(gameId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            return Game.findById(gameId)
                .then(game => {
                    if (!game) throw new NotFoundError(`game with id ${gameId} not found`)

                    return new Promise((resolve, reject) => {
                        try {
                            const toStream = fs.createWriteStream(path.join(__dirname, `../data/games/${gameId}.jpg`))

                            stream.pipe(toStream)

                            stream.once('end', resolve)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
        })
}