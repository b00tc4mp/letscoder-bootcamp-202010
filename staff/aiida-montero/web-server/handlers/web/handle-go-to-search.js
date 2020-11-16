const fs = require('fs')
const path = require('path')
const {searchMovies} = require('../../logic')
const MOVIESURL = "https://image.tmdb.org/t/p/w500"

module.exports = (req, res) => {
  
    const {query: {q}, session: {userId, cookiesAccepted} } =req

    if(!userId)
    fs.readFile(path.join(__dirname, '../../views/search.html'), 'utf8', (error, content) => {
        debugger
        if(error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

        if(!q)
           return res.send(content.replace('{cookiesAccepted}', cookiesAccepted).replace('{results}', '' ))

        searchMovies(q, (error,movie) => {
            if(error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)
             debugger
            const results = `<ul>
            ${movie.results.map(({id,title,poster_path}) => `<li>
            <a href = "http://localhost:3000/movie/${id}">
                    <h3>${title}<h3>
                    <img src = "${MOVIESURL}${poster_path}">
                    </a>
                    </li>`).join('\n')}
                    </ul>`
                    res.send(content.replace('{cookiesAccepted}', cookiesAccepted).replace('{results}', results))
        })

    })
   else res.redirect('/')
}