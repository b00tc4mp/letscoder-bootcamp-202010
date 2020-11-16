const fs = require('fs')
const path = require('path')
// const sessions = require('../../../sessions')
// const { createId } = require('../../../utils/ids')
// const { createSessionCookie } = require('./helpers/cookies')
const { searchVehicles } = require('../../logic/indexer')

module.exports = (req, res, handleError) => {
    // req destructuring
    const { session: { userId, cookiesAccepted }, query: { q } } = req


    // if (!session.userId) --> there is no register/login yet
    if (!userId)
        fs.readFile(path.join(__dirname, '../../views/search.html'), 'utf8', (error, content) => {
            if (error) return handleError(error)

            if(!q)
                return res.send(content.replace('{cookiesAccepted}', cookiesAccepted).replace('{results}', ''))

            searchVehicles(q, (error, vehicles) => {
                if (error) return handleError(error)
                
                const results = `<ul>
                    ${vehicles.map(({id, name, thumbnail}) => `<li>
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
