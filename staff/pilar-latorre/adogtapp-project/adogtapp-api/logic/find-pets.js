const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose
const { User, Pet } = require('../models')

module.exports = function (shelterId, queryShelter, city, queryPet, species, breed ) {
    //poner validations
    
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