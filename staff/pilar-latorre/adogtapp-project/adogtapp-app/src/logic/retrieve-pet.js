import { call } from '../utils'
import {  validateCallback, validateId } from './helpers/validations'
import context from './context'

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

export default (function (id, callback) {
    validateId(id)
    validateCallback(callback)

    const { API_URL } = this

    call('GET', `${API_URL}/pets/${id}`, {'Content-type': 'application/json'},
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
}).bind(context)