function retrieveGenre(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://api.themoviedb.org/3/genre/movie/list?api_key=e187746b7167e4886a5d0a2f1ead5a18&language=en`,
        {}, '', function (status, response) {
            if (status === 200) {
                const res = JSON.parse(response)
                const genres = res.genres

                callback(null, genres)
            } else callback(new Error('sorry, cannot show the selected genre :('))
        })
}