const { models: { User, Pet }, mongoose: { Types: { ObjectId } } , mongoose} = require('adogtapp-data')
const { validateId, validateCity, validateBreed, validateQuery } = require('./helpers/validations')

/**
 * Retrieves pets that match a query criteria
 * 
 * @param {String} shelterId shelter´s identification number
 * @param {string} queryShelter query to find information about the shelter, with this criteria you can search by name, email and description
 * @param {String} city shelter´s city
 * @param {string} queryPet query to find information about the pet, with this criteria you can search by name and description
 * @param {String} species shelter´s species
 * @param {String} breed shelter´s breed
 * 
 * @returns {Array} Array representing the pets matching the queries criteria. Otherwise, empty array.
 * 
 */

module.exports = function (shelterId, queryShelter, city, queryPet, species, breed ) {
    if (typeof city !== 'undefined') validateCity(city)
    if (typeof breed !== 'undefined') validateBreed(breed)
    if (typeof queryShelter !== 'undefined') validateQuery(queryShelter)
    if (typeof queryPet !== 'undefined') validateQuery(queryPet)
    
    
    const criteria = {}
    if (shelterId)
        criteria._id = ObjectId(shelterId)

    if (queryShelter)
        criteria.$or = [
            { name: { $regex: new RegExp(queryShelter, 'i') } },
            { email: { $regex: new RegExp(queryShelter, 'i') } },
            { description: { $regex: new RegExp(queryShelter, 'i') } }
        ]

    if (city)
        criteria.city = { $regex: new RegExp(city, 'i') }


    return User.find(criteria).lean()
        .then(users => {
            const ids = users.map(({ _id }) => _id)



            const criteria = {
                shelter: { $in: ids }
            } 
            
            if (queryPet)
            criteria.$or = [
                { name: { $regex: new RegExp(queryPet, 'i') } },
                { description: { $regex: new RegExp(queryPet, 'i') } }
            ]
            if (species)
                criteria.species = { $regex: new RegExp(species, 'i') }

            if (breed)
                criteria.breed = { $regex: new RegExp(breed, 'i') }
               
            

            return Pet.find(criteria).lean()
        })
        .then(pets => {
            pets.forEach(pet => {
                const { _id } = pet

                pet.id = _id.toString()

                delete pet._id
            })

            return pets
        })
} 