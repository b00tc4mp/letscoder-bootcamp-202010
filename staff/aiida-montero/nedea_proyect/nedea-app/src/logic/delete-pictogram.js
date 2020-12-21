
/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {string} token The auth token when credentials are correct (validation in API)
 */

/**
 * Delete pictogram from his token.
 * 
 * @example
 * 
 * 
 * @param {string} token The token of the user generated when authenticating.
 * @param {string} pictogramId The pictogramId of the user who wants to register. 
 * @param {function} callback The callback exppression that manage of the unregister.
 * 
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 * 
 * 
 */

import { call } from '../utils'
import { validateId, validateCallback } from './helpers/validations'

export default function (pictogramId, token,callback)  {
/*     validateId(ownerId) */
    validateCallback(callback)
    validateId(pictogramId)

    call(
        "DELETE",
        "http://localhost:4000/api/pictograms",
        { Authorization: "Bearer " + token, "Content-type": "application/json" },
        '{ "pictogramId": "' + pictogramId + '" }',
        function (status, response) {
          if (status === 200) {
            callback(null);
          } else {
            var res = JSON.parse(response);
            callback(new Error(res.error));
          }
        }
      );
}
