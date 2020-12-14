const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { User, Pet } } =require('adogtapp-data')
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
            const {shelter} = pet
            const shelterId= shelter.toString()
debugger    
            return User.findById(shelterId).lean()
                .then(user => {
                    const { _id } = pet
                    const { description } = user

                    user.descriptionShelter = description 
                    pet.id = _id.toString()

                    delete pet._id
                    delete pet.__v
                    
                    delete user.description


        
                    return {...pet, ...user}

                }) 


        })
}