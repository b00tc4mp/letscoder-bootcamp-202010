function retrieveMovies(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a query')

    if (!query.trim().length) throw new Error('query is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://api.themoviedb.org/3/search/movie?api_key=e187746b7167e4886a5d0a2f1ead5a18&query=${query}&page=1&include_adult=false`,
        {}, '', function (status, response) {
            if (status === 200) {
                const res = JSON.parse(response)
                const movies = res.results

                callback(null, movies)
            } else callback(new Error('sorry, cannot search :('))
        })
}