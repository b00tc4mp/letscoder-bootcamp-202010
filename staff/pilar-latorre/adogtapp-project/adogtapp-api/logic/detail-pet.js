const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { Pet } = require('../models')

/**
 * Retrieves a pet by its id
 * 
 * @param {string} petId 
 * 
 * @returns {Promise}
 */
module.exports = function (petId) {
    validateId(petId)

    return Pet.findById(petId).lean()
        .then(pet => {
            if (!pet) throw new NotFoundError(`pet with id ${petId} not found`)

            const { _id } = pet

            pet.id = _id.toString()
            
            delete pet._id
            delete pet.__v

            return pet
        })
}