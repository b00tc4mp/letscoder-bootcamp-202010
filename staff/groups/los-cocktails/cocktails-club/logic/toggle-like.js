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