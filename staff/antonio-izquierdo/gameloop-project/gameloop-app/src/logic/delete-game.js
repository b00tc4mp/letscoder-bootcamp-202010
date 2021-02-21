import { call } from '../utils'
import {  validateCallback, validateId } from './helpers/validations'

/**
 * Delete a game by its id
 * 
 * @param {string} id game's identification number
 * 
 * @returns {null} of succefully result
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 */

export default function ( id, callback) {
    validateId(id)
    validateCallback(callback)

    call('DELETE', `http://localhost:4000/api/games/${id}`, {},
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