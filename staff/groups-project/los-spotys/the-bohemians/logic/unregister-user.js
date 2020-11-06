/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 */

/**
 * Unregister a user by means of password and token.
 * 
 * @example
 * 
 * unregisterUser(password, token, function(error) {
 *      if (error) return console.error(error)
 *      
 *  
 * })
 * 
 * @param {string} password The user password
 * 
 * @param {callback} callback The callback expression that manages the result of the authentication
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */


function unregisterUser(password, token, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')
    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a password')
    if (!password.trim().length) throw new Error(' password is empty or blank')



    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('DELETE',
        'https://b00tc4mp.herokuapp.com/api/v2/users',
        {   
            'Authorization': 'Bearer ' + token,
            'Content-type': 'application/json'
        },
        '{ "password": "' + password + '"}',
        function (status, response) {
            if (status === 204)
                callback(null)
            else {
                var res = JSON.parse(response)
                callback (new Error(res.error))
            }
        }
    )
} 