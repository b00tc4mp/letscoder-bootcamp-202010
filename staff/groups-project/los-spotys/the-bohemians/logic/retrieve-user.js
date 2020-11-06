/**
 *  The callback expression that manages the result of the retrieve
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {object} res The response when credentials are correct (validation in API)
 */

/**
 * Retrieve a user by token.
 * 
 * @param {string} token Token given by the authenticate
 * @param {callback} callback The callback expression that manages the result of the retrieve
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */


const retrieveUser = (token, callback) => {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
        (status, response) => {
            if (status === 200) {
                const res = JSON.parse(response)

                callback(null, res)
            } else {
                const { error } = JSON.parse(response)

                callback(new Error(error))
            }
        })
} 