import { call } from '../utils'
import context from './context'
import {  validateCallback, validateId } from './helpers/validations'

/**
 * Delete a pet by its id
 * 
 * @param {string} id pet's identification number
 * 
 * @returns {null} of succefully result
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 */

export default (function ( token, id, callback) {
    validateId(id)
    validateCallback(callback)


    const { API_URL } = this

    call('DELETE', `${API_URL}/pets/${id}`, {Authorization: `Bearer ${token}`},
    '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
           

            callback(null)
        })
}).bind(context)