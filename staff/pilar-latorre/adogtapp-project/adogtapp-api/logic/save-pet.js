const { validateId, validateName, validateBreed, validateColor, validateDescription} = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { User, Pet }, mongoose: { Types: { ObjectId } } } = require('adogtapp-data')


module.exports = function (petId, name, breed, species, color, description, shelter) {
    if (typeof petId !== 'undefined') validateId(petId)
    validateName(name)
    validateBreed(breed)
    validateColor(color)
    validateDescription(description)
    validateId(shelter)
debugger
    const _id = ObjectId(shelter)

    return User
        .findOne({ _id })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${shelter} not found`)


            if (petId) {
                const _id = ObjectId(petId)

                return Pet
                    .findOne({ _id })
                    .then (pet => {
                        if (!pet) throw new NotFoundError(`pet with id ${petId} not found`)

                    return Pet
                        .updateOne({ _id }), { $set: { name, breed, species, color, description }}
                        .then (pet => pet.id) 

                })
            } else
                return Pet
                .create({ name, breed, species, color, description, shelter: ObjectId(shelter) })
                .then(pet => pet.id)

    })
}