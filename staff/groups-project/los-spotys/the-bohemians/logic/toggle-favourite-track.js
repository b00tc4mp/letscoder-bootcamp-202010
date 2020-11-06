/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 */

/**
 * toggle track favourite for the user by means of token and id.
 * 
 * @example
 * 
 * toggleFavouriteTrack(token, id, console.log)
 *   
 *
 * 
 * 
 * @param {string} token The token given by authenticate
 * @param {string} id the id of the track the user want
 * @param {callback} callback The callback expression that manages the result of the authentication
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */



const toggleFavouriteTrack = (token, id, callback) => {
    
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof id !== 'string') throw new TypeError(id + ' is not an id')

    if (!id.trim().length) throw new Error('id is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
        (status, response) => {
            
            if (status === 200) {
                const { favourites = [] } = JSON.parse(response)

                const index = favourites.indexOf(id)

                if (index > -1) favourites.splice(index, 1)
                else favourites.push(id)

                call('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users/', 
                {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json'
                    },
                    JSON.stringify({ favourites }),
                    (status, response) => {
                        if (status === 204)
                            callback(null)
                        else {
                            var response = JSON.parse(this.responseText)

                            callback(new Error(response.error))
                        }
                    }
                )
            } else {
                const { error } = JSON.parse(response)

                callback(new Error(error))
            }
        })
}