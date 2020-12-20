const { validateId } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')
const { models: { User, Pet } } = require('adogtapp-data')
const { NotFoundError } = require('../errors')

/**
 *  Upload pet's picture
 * 
 * @param {string} userId pet's identification number(ObjectId)
 * @param {string} petId pet's identification number(ObjectId)
 * @param {Stream} stream data image
 * @returns {Promise} empty promise on successful upload 
 * 
 */

module.exports = (userId, petId, stream) => {
    validateId(userId)
    validateId(petId)
    //validateStream(stream)
    
    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Pet.findById(petId)
                .then(pet => {
                    if (!pet) throw new NotFoundError(`pet with id ${petId} not found`)

                    return new Promise((resolve, reject) => {
                        try {
                            const toStream = fs.createWriteStream(path.join(__dirname, `../data/pets/${petId}.jpg`))

                            stream.pipe(toStream)

                            stream.once('end', resolve)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
        })
}