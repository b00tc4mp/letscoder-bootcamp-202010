/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {string} token The auth token when credentials are correct (validation in API)
 */

/**
 * Authenticates a user by means of email and password.
 * 
 * @example
 * 
 * authenticateUser(email, password, function(error, token) {
 *      if (error) return console.error(error)
 *      
 *      console.log(token)
 * })
 * 
 * @param {string} email The user e-mail
 * @param {string} password The user password
 * @param {callback} callback The callback expression that manages the result of the authentication
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */

function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new TypeError(email + ' is not an e-mail')

    if (!email.trim().length) throw new Error('e-mail is empty or blank')

    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a password')

    if (!password.trim().length) throw new Error('password is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('POST',
    'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
    {'Content-type': 'application/json'},
    '{ "username": "' + email + '", "password": "' + password + '" }',
        function (status, response){
                if (status ===200){
                var resText = JSON.parse(response)
                callback(null, resText.token)
                }else{
                var res = JSON.parse(response)
                callback(new Error(res.error))

            }
        }
    )
} 