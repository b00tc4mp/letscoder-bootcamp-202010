const fs = require('fs')
const path = require('path')
const sessions = require('../../sessions')
const { retrieveVehicles } = require('../../logic')

module.exports = (req, res) => {
    // req destructuring
    const { cookies: { 'session-id': sessionId }, url } = req

    const urlParts = url.split('/');

    const [,,vehicleId] = urlParts

    debugger
    // const path = document.location.pathname

    // const parts = path.split("/")

    // const [,,vehicleId] = parts

    const session = sessions[sessionId] || (sessions[sessionId] = {})

    const { cookiesAccepted } = session


        fs.readFile(path.join(__dirname, '../../views/detail.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            retrieveVehicles(vehicleId, (error, vehicle) => {
                if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

                const {name, image, maker, description, price} = vehicle
                vehicle = ` <h3>${name}</h3>
                            <img src="${image}">
                            <p>Maker: ${maker}</p><p>Description: ${description}</p>
                            <p>Price: ${price} $</p>`

                //console.log(vehicle)
                res.send(content.replace('{cookiesAccepted}', cookiesAccepted).replace('{result}', vehicle))
    
            })
        })
}