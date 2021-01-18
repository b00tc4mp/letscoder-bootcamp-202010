const toggleLikeMovie = (token, movieId, callback) => {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof movieId !== 'number') throw new TypeError(movieId + ' is not a movieId')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    // retrieve user properties. 
    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
        (status, response) => {
            if (status === 200) {
                const { likes = [] } = JSON.parse(response)

                // const { likes = {} } = JSON.parse(response)

                const index = likes.indexOf(movieId)

                if (index > -1) likes.splice(index, 1)
                else likes.push(movieId)

                // modify user's 'like' property according to above action.
                call('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users/',
                    {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json'
                    },
                    JSON.stringify({ likes }),
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