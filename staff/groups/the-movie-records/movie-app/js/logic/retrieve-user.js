/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {object} res Returns the content of your user data
 */

/**
 * Delete user from his token.
 * 
 * @example
 * 
 * retrieveUser('token', function(error, user) {
    console.log('DEMO retriveUser()')

    if (error) console.error(error)
    else console.log(user)
})
 * 
 * @param {string} token The token of the user generated when authenticating.
 * @param {function} callback The callback exppression that manage of the unregister.
 * 
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 * 
 * 
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