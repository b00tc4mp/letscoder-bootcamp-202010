/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 */

/** Get retrieve user.
 * 
 * @example
 * 
 * 
 * @param {string} pictogramId 
 * @param {function} callback The callback exppression that manage of the unregister.
 * @param {string} token
 * @param {string} title
 * @param {description}
 * 
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 * 
 * 
 */

import { call } from '../utils'
import { validateToken, validateId, validateTitle, validateCallback } from './helpers/validations'

export default function savePictogram( pictogramId, token, title, description,  callback) {
    validateToken(token)
    if (typeof pictogramId !== 'undefined') validateId(pictogramId)
    validateTitle(title)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/pictograms', { 
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ pictogramId, title, description }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            
            const  { pictogramId } = JSON.parse(response)
            callback(null, pictogramId)
        })
}