/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API.
 * @param {objet} pictograms Get the pictogram in the search .
 */

/**
 * Get search pictograms.
 * 
 * @example
 * 
 *
 * @param {string} query Parameter necessary to do the search.
 * @param {function} callback The callback exppression that manage of the unregister.
 * 
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 * 
 * 
 */

import { call } from '../utils'
import { validateQuery } from './helpers/validations'
export default function searchPictogram( query, callback) {
    validateQuery(query)
    
    call('GET', `http://localhost:4000/api/pictograms?search=${query}`, { 
        'Content-type': 'application/json',
        
    },
    JSON.stringify({ query }),
    (status, response) => {
        if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(JSON.parse(response))
        })
}