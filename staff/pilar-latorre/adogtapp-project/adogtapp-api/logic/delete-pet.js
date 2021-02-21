const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { Pet, User }, mongoose: { Types: { ObjectId } } , mongoose } = require('adogtapp-data')



/**
 * Delete a pet by its id
 * 
 * @param {string} petId 
 * @param {string} shelter 
 * 
 * @returns {Promise} with empty object
 * 
 * @throws {NotFoundError} if the petId does not exist
 */
module.exports = function (shelter, petId) {
    validateId(shelter)
    validateId(petId)

    return User
        .findById(shelter).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${shelter} not found`)

            if (petId) {

                return Pet
                    .findById(petId)
                    .then(pet => {
                        if (!pet) throw new NotFoundError(`pet with id ${petId} not found`)

                        return Pet
                            .deleteOne({ _id: ObjectId(petId) })
                            .then(() => {})

                    })
            } 
    })
}