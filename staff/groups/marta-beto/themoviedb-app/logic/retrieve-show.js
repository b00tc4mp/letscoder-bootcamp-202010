function retrieveShow(showId, token, callback) {
    if (typeof showId !== 'number') throw new TypeError(showId + ' is not a rigth id')

    if (showId === undefined) throw new Error('showId is empty or blank')

    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://api.themoviedb.org/3/tv/${showId}?api_key=e187746b7167e4886a5d0a2f1ead5a18&language=en-US`,
        {}, '', function (status, response) {
            if (status === 200) {
                const show = JSON.parse(response)

                if (show)
                    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
                    (status, response) => {
                        if (status === 200) {
                        const { likes = [] } = JSON.parse(response)

                        show.like = likes.includes(show.id)

                        callback(null, show)
                    }
                })
                else callback(null, show)

            } else {
                const { error } = JSON.parse(response)
                
                callback(new Error(error))
            }
        })
}