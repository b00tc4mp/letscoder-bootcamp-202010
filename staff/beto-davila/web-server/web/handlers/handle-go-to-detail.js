const fs = require('fs')
const path = require('path')
const sessions = require('../../sessions')
const { retrieveVehicles } = require('../../logic')

module.exports = (req, res) => {
    // req destructuring
    const { cookies: { 'session-id': sessionId } } = req

    const session = sessions[sessionId] || (sessions[sessionId] = {})

    const { cookiesAccepted } = session


        fs.readFile(path.join(__dirname, '../../views/detail.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            retrieveVehicles(id, (error, vehicle) => {
                if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

                const {id, name, image, maker, description, price} = vehicle
                console.log(vehicle)
                // const result = `<ul>
                //     ${vehicles.map(({id, name, thumbnail}) => `<li>
                //         <a href="http://localhost:3000/vehicles/${id}">
                //             <h3>${name}</h3>
                //             <img src="${thumbnail}">
                //         </a>
                //     </li>`).join('\n')}
                // </ul>`

                //res.send(content.replace('{cookiesAccepted}', cookiesAccepted).replace('{result}', vehicle))
    
            })
        })
}