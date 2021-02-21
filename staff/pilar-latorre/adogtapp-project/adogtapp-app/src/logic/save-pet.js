import { call } from '../utils'
import { validateToken, validateId, validateName, validateBreed,  validateColor, validateDescription, validateCallback } from './helpers/validations'
import context from './context'

/**
 *  Upload pet
 * 
 * @param {string} token use to know shelterId
 * @param {string} petId pet's identification number(ObjectId)
 * @param {Stream} name pet´s name
 * @param {Stream} breed pet´s breed
 * @param {Stream} species pet´s species
 * @param {Stream} color pet´s color
 * @param {Stream} description pet´s description
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 * 
 * @returns {array} returns array of objects with the pet info
 */


export default (function savePet( token, petId, name, breed, species, color, description, callback) {
    validateToken(token)
    if (typeof petId !== 'undefined') validateId(petId)
    validateName(name)
    validateBreed(breed)
    validateColor(color)
    validateDescription(description)
    validateCallback(callback)

    const { API_URL } = this

    call('POST', `${API_URL}/pets`, { 
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ petId, name, breed, species, color, description }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }


            callback(null, response)
        })
}).bind(context)