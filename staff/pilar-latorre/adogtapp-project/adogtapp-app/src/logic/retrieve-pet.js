import { call } from '../utils'
import {  validateCallback, validateId } from './helpers/validations'

/**
 * Retrieves a pet by its id
 * 
 * @param {string} petId 
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 * 
 * @returns {object} with pet info 
 * 
 */

export default function (id, callback) {
    validateId(id)
    validateCallback(callback)

    call('GET', `http://localhost:4000/api/pets/${id}`, {'Content-type': 'application/json'},
        null,
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const pet = JSON.parse(response)

            callback(null, pet)
        })
}