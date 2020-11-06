function retrieveMovie(movieId, token, callback) {
    if (typeof movieId !== 'number') throw new TypeError(movieId + ' is not a rigth id')

    if (movieId === undefined) throw new Error('movieId is empty or blank')

    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://api.themoviedb.org/3/movie/${movieId}?api_key=e187746b7167e4886a5d0a2f1ead5a18`,
        {}, '', function (status, response) {
            if (status === 200) {
                const movie = JSON.parse(response)

                if (movie)
                    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
                    (status, response) => {
                        if (status === 200) {
                        const { likes = [] } = JSON.parse(response)

                        movie.like = likes.includes(movie.id)

                        callback(null, movie)
                    }
                })
                else callback(null, movie)

            } else {
                const { error } = JSON.parse(response)
                
                callback(new Error(error))
            }
        })
}