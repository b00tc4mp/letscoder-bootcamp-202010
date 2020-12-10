const {searchMovies} = require('../../logic')
const MOVIESURL = "https://image.tmdb.org/t/p/w500"

module.exports = (req, res, handleError) => {
  
    const {query: {q}, session: {userId, cookiesAccepted}} =req

    if(!userId)
       if(!q)
           res.render('search', {results: '' , cookiesAccepted}, (error,html) => {
           if(error) return handleError(error)
           res.send(html)
        
            return res.send(html)

           })
    else 
    res.render('search', {cookiesAccepted}, (error,html) => {
        if(error) return handleError(error)


        searchMovies(q, (_error,movie) => {
          if(_error) return handleError(_error)
            const results = `<ul>
            ${movie.results.map(({id,title,poster_path}) => `<li>
            <a href = "http://localhost:3000/movie/${id}">
                    <h3>${title}<h3>
                    <img src = "${MOVIESURL}${poster_path}">
                    </a>
                    </li>`).join('\n')}
                    </ul>`
                    res.send(html.replace('{results}', results))
        })

    })
   else res.redirect('/')
}