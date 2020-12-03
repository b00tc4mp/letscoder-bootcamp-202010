const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose
const { User, Pet } = require('../models')

module.exports = function (userId, query, city, name, species, breed) {
    //poner validations
    
    const criteria = {}

    if (userId)
        criteria._id = ObjectId(userId)

    if (query)
        criteria.$or = [
            { name: { $regex: new RegExp(query, 'i') } },
            { email: { $regex: new RegExp(query, 'i') } },
            { description: { $regex: new RegExp(query, 'i') } }
        ]

    if (city)
        criteria.city = { $regex: new RegExp(city, 'i') }


    return User.find(criteria).lean()
        .then(users => {
            const ids = users.map(({ _id }) => _id)

            console.log(ids)

            const criteria = {
                shelter: { $in: ids }
            }

            if (name)
                criteria.name = { $regex: new RegExp(name, 'i') }

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