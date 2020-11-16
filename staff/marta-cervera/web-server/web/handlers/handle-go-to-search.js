const fs = require('fs')
const path = require('path')
const sessions = require('../../sessions')
const { createId } = require('../../utils/ids')
const { createSessionCookie } = require('./helpers/cookies')
const { searchVehicles } = require('../../logic')

module.exports = (req, res) => {
    const { cookies: { 'session-id': sessionId = createId() }, query: { q } } = req

    

    res.setHeader('set-cookie', createSessionCookie(sessionId))

    const session = sessions[sessionId] || (sessions[sessionId] = {})

    const { userId, cookiesAccepted } = session

    if (!userId)
        fs.readFile(path.join(__dirname, '../../views/search.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            if (!q)
                return res.send(content.replace('{cookiesAccepted}', cookiesAccepted).replace('{results}', ''))

            searchVehicles(q, (error, vehicles) => {
                if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

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