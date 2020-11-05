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