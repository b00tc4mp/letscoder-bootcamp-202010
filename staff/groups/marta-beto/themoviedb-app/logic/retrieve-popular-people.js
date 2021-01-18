const retrievePopularPeople = (callback) => {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://api.themoviedb.org/3/person/popular?api_key=e187746b7167e4886a5d0a2f1ead5a18&language=en-US&page=1`,
        {}, '', function (status, response) {
            if (status === 200) {
                const res = JSON.parse(response)
                let popularPeople = res.results

                const locationPath = 'https://image.tmdb.org/t/p/w500'

                popularPeople = popularPeople.map(({id, profile_path}) => ({id , image: locationPath + profile_path}))
                         
                callback(null, popularPeople);

            } else callback(new Error('sorry, cannot search :('))
        })
}