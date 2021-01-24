/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API.
 * @param {object} response Returns the content of the aPI pictograms.
 */

/**
 * Get retrieve favourite pictogram.
 * 
 * @example
 * 
 * 
 *
 * 
 * @param {function} callback The callback exppression that manage of the unregister.
 * @param {string} token The token of the user generated when authenticating.
 * 
 * 
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 * 
 * 
 */

import { call } from '../utils'
import { validateToken, validateCallback } from './helpers/validations'

export default function (token, callback) {
    validateToken(token)
    validateCallback(callback)

    call('GET', 'http://localhost:4000/api/users/favourites', { Authorization: `Bearer ${token}` },
        '',
        (status, response) => {
          
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
          
            const pictogram = JSON.parse(response)

            callback(null, pictogram)
        })
}