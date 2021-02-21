// const { likes = [] } = JSON.parse(response)

//esto devuelve en index la posicion en la que se encuentra 
//ese item dentro del array.. si no se encuentra se devuelde un -1
//y en ese caso comprobamos que no to tiene like y pusheamos el id dentro del array para 
//ponerle el like
// const index = likes.indexOf(vehicleId)
// if (index > -1) likes.splice(index, 1)
// else likes.push(vehicleId)

//antes de esto hay que hacer una call a la api de usuarios para recuperar la lista de likes
//y despues de esto hay que hacer un patch para actualizarla en la api
//tmb despues de hacer un toggle dentro de la busqueda hay q repetir la busqueda con esa query
//y si le dan a like desde detail hay que volver a entrar al detail con el id de ese trago 
// y por ultimo habria que implementar la opcion de ver los favoritos buscando la lista de likes de la api
/**
 *  The callback expression that manages the API's error if ther is one
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * 
 */
/**
 * Adds / Removes the cocktail id from likes array list.
 * 
 * 
 * @example
 * 
 * toggleLike(token, id, function(error,) {
 *      if (error) return console.log(error.message)
 * 
 * })
 * 
 * @param {string} token The authentication token required by the users API
 * @param {string} id The id of the cocktail to add/remove from likes list
 * @param {callback} callback The callback expression that manages the error given by the cocktails API
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 * @throws {Error} When API does not find results
 */

function toggleLike(token, id, callback) {
    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
        (status, response) => {
            if (status === 200) {
                const { likes = [] } = JSON.parse(response)

                const index = likes.indexOf(id)
                if (index > -1) likes.splice(index, 1)
                else likes.push(id)

                call('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}`, 'Content-type': 'application/json' },
                    JSON.stringify({ likes }),
                    (status, response) => {
                        if (status === 204)
                            callback(null)
                        else {
                            var response = JSON.parse(this.responseText)

                            callback(new Error(response.error))
                        }
                    })
            }
        })
}