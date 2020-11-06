/**
 *  The callback expression that manages the result of the modifycation
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 */

/**
 * Modify the user adding or updating new information by token.
 * 
 * @param {string} token Token given by the authenticate
 * @param {object} changes Changes we want to update on the user
 * @param {callback} callback The callback expression that manages the result of the modifycation
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */


function modifyUser(token, changes, callback) {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a token`)

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof changes !== 'object') throw new TypeError(`${changes} is not a object`)


    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a callback`)

    call('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users/',
        {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json'
        },
        JSON.stringify(changes),
        (status, response) => {
            if (status === 204)
                callback(null)
            else {
                var response = JSON.parse(this.responseText)

                callback(new Error(response.error))
            }
        }
    )
} 