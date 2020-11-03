call('GET', `https://api.themoviedb.org/3/trending/movie/day?api_key=e187746b7167e4886a5d0a2f1ead5a18`,
        {}, '', function (status, response) {
            if (status === 200) {
                const res = JSON.parse(response)
                const trending = res.results
                const filePath = 'https://image.tmdb.org/t/p/w500'

                const posters = trending.map(item => filePath + item.poster_path)
              
                console.log(null, posters); // show full images

            } else console.log(new Error('sorry, cannot search :('))
        })