/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * 
 */

/**
 * Get toggle like pictograms.
 * 
 * @example
 * 
 * 
 * 
 * @param {string} token The token of the user generated when authenticating.
 * @param {string} pictogramId The pictogramId of the pictograms generated for the Api. 
 * @param {function} callback The callback exppression that manage of the toggle-like-pictogram.
 * 
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 * 
 * 
 */

import { call } from '../utils'
import { validateId, validateCallback, validateToken } from './helpers/validations'

export default function (token, pictogramId, callback) {
    validateToken(token)
    validateCallback(callback)
    validateId(pictogramId)
            call("PATCH", "http://localhost:4000/api/users",
            {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
              },
              JSON.stringify({ likeId : pictogramId }),
              (status, response) => {
                if (status === 200) callback(null);
                else {
                  
                  var response = JSON.parse(this.responseText);
    
                  callback(new Error(response.error));
                }
              }
            )
        }
