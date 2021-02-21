const fs = require('fs')
const path = require('path')
const { validateId } = require('./helpers/validations')
const { promises: fsp } = fs

/**
 * Retrieves a pet image by its id
 * 
 * @param {string} petId 
 * 
 * @returns {Promise} with pet´s photo
 * 
 */

module.exports = petId => {
    validateId(petId)

    const file = path.join(__dirname, `../data/pets/${petId}.jpg`)

    return fsp.access(file, fs.constants.F_OK)
        .then(() => fs.createReadStream(file))
        .catch(() => fs.createReadStream(path.join(__dirname, '../populate/pets/default.jpg')))
}