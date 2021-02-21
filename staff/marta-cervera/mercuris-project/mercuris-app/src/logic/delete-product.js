import { call } from '../utils'
import {  validateCallback, validateId, validateToken } from './helpers/validations'


/**
 * Delete a product by its id
 * 
 * @param {string} id product's identification number
 * 
 * @returns {null} of succefully result
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 */

export default function ( token, id, callback) {
    validateToken(token)
    validateId(id)
    validateCallback(callback)

    call('DELETE', `http://localhost:4000/api/products/${id}`, { Authorization: `Bearer ${token}`},
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
}