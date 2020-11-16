const fs = require('fs')
const path = require('path')
const { searchVehicles } = require('../../logic')

module.exports = (req, res, handleError) => {
    const { query: { q }, session: { userId, cookiesAccepted } } = req

    if (!userId)
        fs.readFile(path.join(__dirname, '../../views/search.html'), 'utf8', (error, content) => {
            if (error) return handleError(error)

            if (!q)
                return res.send(content.replace('{cookiesAccepted}', cookiesAccepted).replace('{results}', ''))

            searchVehicles(q, (error, vehicles) => {
                if (error) return handleError(error)

                const results = `<ul>
                    ${vehicles.map(({ id, name, thumbnail }) => `<li>
                        <a href="http://localhost:3000/vehicles/${id}">
                            <h3>${name}</h3>
                            <img src="${thumbnail}">
                        </a>
                    </li>`).join('\n')}
                </ul>`

                res.send(content.replace('{cookiesAccepted}', cookiesAccepted).replace('{results}', results))
            })
        })
    else res.redirect('/')
}