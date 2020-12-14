const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { Pet } } =require('adogtapp-data')


/**
 * Retrieves a pet by its id
 * 
 * @param {string} petId 
 * 
 * @returns {Promise}
 */
module.exports = function (petId) {
    validateId(petId)

    return Pet.findByIdAndRemove(petId).lean()
        .then(pet => {
            if (!pet) throw new NotFoundError(`pet with id ${petId} not found`)

     
            return {}
        })
}