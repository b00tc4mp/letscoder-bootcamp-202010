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
 * @param {string} image 
 * 
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 * 
 * 
 */
import { call } from '../utils'
import { validateId, validateFile, validateCallback } from './helpers/validations'

export default function (pictogramId, image, callback) {
    validateId(pictogramId)
    //validateFile(image)
    validateCallback(callback)

    var formData = new FormData();
    formData.append("image", image);

    call('POST', `http://localhost:4000/api/pictograms/${pictogramId}/images`, {},
        formData,
        (status, response) => {
            
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 204) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(null)
        })
}