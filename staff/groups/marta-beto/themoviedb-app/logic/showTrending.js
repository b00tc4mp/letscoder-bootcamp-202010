const showTrending = (callback) => {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a query')

    if (!query.trim().length) throw new Error('query is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://api.themoviedb.org/3/trending/movie/day?api_key=e187746b7167e4886a5d0a2f1ead5a18`,
        {}, '', function (status, response) {
            if (status === 200) {
                const res = JSON.parse(response)
                const trending = res.results
              
                callback(null, trending);

            } else callback(new Error('sorry, cannot search :('))
        })
}