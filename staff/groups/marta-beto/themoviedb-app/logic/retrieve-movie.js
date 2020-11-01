function retrieveMovie(movieId, callback) {
    if (typeof movieId !== 'number') throw new TypeError(movieId + ' is not a rigth id')

    if (movieId === undefined) throw new Error('movieId is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://api.themoviedb.org/3/movie/${movieId}?api_key=e187746b7167e4886a5d0a2f1ead5a18`,
        {}, '', function (status, response) {
            if (status === 200) {
                const movie = JSON.parse(response)

                callback(null, movie)
            } else callback(new Error('sorry, cannot search :('))
        })
}