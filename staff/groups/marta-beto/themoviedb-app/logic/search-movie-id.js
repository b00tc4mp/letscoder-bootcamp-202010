function searchMovieId(token, movieId, callback) {
    if (typeof movieId !== 'number') throw new TypeError(query + ' is not a query')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://api.themoviedb.org/3/movie/${movieId}?api_key=e187746b7167e4886a5d0a2f1ead5a18&language=en-US`,
        {}, '', function (status, response) {
            if (status === 200) {
                const movie = JSON.parse(response)

                call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
                    (status, response) => {
                        if (status === 200) {
                            const { likes = [] } = JSON.parse(response)

                            movie.like = likes.includes(movie.id)

                            callback(null, movie)
                        }
                    })

                callback(null, movie)
            } else callback(new Error('sorry, cannot search :('))
        })
}