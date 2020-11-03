const retrieveTrendingMovies = (callback) => {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://api.themoviedb.org/3/trending/movie/day?api_key=e187746b7167e4886a5d0a2f1ead5a18`,
        {}, '', function (status, response) {
            if (status === 200) {
                const res = JSON.parse(response)
                let trendingMovies = res.results

                const locationPath = 'https://image.tmdb.org/t/p/w500'

                trendingMovies = trendingMovies.map(({id, poster_path}) => ({id , image: locationPath + poster_path}))
                         
                callback(null, trendingMovies);

            } else callback(new Error('sorry, cannot search :('))
        })
}