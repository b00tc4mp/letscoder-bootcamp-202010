const fs = require('fs')
const path = require('path')
const sessions = require('../../sessions')
const { retrieveVehicle } = require('../../logic')

module.exports = (req, res) => {
    const { cookies: { 'session-id': sessionId } } = req

    const session = sessions[sessionId]
    // if (session && session.userId) {

    let url = req.url
    var id = url.split('/')[3] // /search/vehicles/id
    debugger
    retrieveVehicle(id, (error, vehicle) => {
        if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)
        if(vehicle){

            debugger
            const { name, image, description, maker, year, url, color } = vehicle
            debugger
            const detail = `<section>
                        <h2>${name}</h2>
                        <a href="${url}">
                            <img src="${image}">
                        </a>
                        <h4>${maker}   ${year}  color: ${color}</h4>
                        <p> ${description}</p>
                        </section>`
            debugger
            fs.readFile(path.join(__dirname, '../../views/detail.html'), 'utf8', (error, content) => {
                if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)
    
                res.send(content.replace('{detail}', detail))
    
            })
        }else return res.redirect('/search')

    })
    // }else res.redirect('/login')



}