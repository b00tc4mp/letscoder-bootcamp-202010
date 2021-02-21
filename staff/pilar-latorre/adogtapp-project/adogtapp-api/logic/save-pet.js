const { validateId, validateName, validateBreed, validateColor, validateDescription } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { User, Pet }, mongoose: { Types: { ObjectId } } } = require('adogtapp-data')

/**
 *  Upload pet
 * 
 * @param {string} shelterId shelter's identification number(ObjectId)
 * @param {string} petId pet's identification number(ObjectId)
 * @param {Stream} name pet´s name
 * @param {Stream} breed pet´s breed
 * @param {Stream} species pet´s species
 * @param {Stream} color pet´s color
 * @param {Stream} description pet´s description
 * 
 * @returns {Promise} returns a promise with the pet info
 */

module.exports = function (shelterId, petId, name, breed, species, color, description) {
    validateId(shelterId)
    if (typeof petId !== 'undefined') validateId(petId)
    validateName(name)
    validateBreed(breed)
    validateColor(color)
    validateDescription(description)

    return User
        .findById(shelterId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${shelterId} not found`)

            if (petId) {
                return Pet
                    .findById(petId)
                    .then(pet => {
                        if (!pet) throw new NotFoundError(`pet with id ${petId} not found`)

                        pet.name = name
                        pet.breed = breed
                        pet.species = species
                        pet.color = color
                        pet.description = description

                        return pet
                            .save()
                            .then(pet => pet.id)
                    })
            } else
                return Pet
                    .create({ name, breed, species, color, description, shelter: shelterId })
                    .then(pet => pet.id)
        })
}