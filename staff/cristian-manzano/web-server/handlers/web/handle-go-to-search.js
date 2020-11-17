const searchVehicles = require('../../logic/search-vehicles')

module.exports = (req, res, handleError) => {
    // req destructuring
    const { session: { userId, cookiesAccepted }, query: { q } } = req


    // if (!session.userId) --> there is no register/login yet
    if (userId)
        if(!q)
            res.render('search', { results: '', cookiesAccepted}, (error, html) => {
            // fs.readFile(path.join(__dirname, '../../views/search.html'), 'utf8', (error, content) => {
                if (error) return handleError(error)

                return res.send(html)
            })

        else 
            res.render('search', { cookiesAccepted }, (error, html) => {
            if (error) return handleError(error)

            searchVehicles(q, (_error, vehicles) => {
            if (_error) return handleError(_error)

            const results = `<ul>
                        ${vehicles.map(({id, name, thumbnail}) => `<li>
                            <a href="http://localhost:3000/vehicles/${id}">
                                <h3>${name}</h3>
                                <img src="${thumbnail}">
                            </a>
                        </li>`).join('\n')}
                    </ul>`
                    
                    res.send(html.replace('{cookiesAccepted}', cookiesAccepted).replace(results, results))
        })
    })
    else res.redirect('/login')
}