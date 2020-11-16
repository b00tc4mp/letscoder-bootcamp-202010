const fs = require('fs')
const path = require('path')
const { retrieveVehicle, retrieveUser } = require('../../logic')

module.exports = (req, res, handleError) => {
    const { params: { vehicleId }, session: { userId } } = req
    if (userId) {

        // var id = url.split('/')[3] // /search/vehicles/id


        retrieveVehicle(vehicleId, (error, vehicle) => {
            if (error) return handleError(error)

            if (vehicle) {

                retrieveUser(userId, (error, user) => {
                    if (error) return handleError(error)

                    const { likes = [] } = user

                    vehicle.like = likes.includes(vehicle.id)

                    const { like, id,  name, image, description, maker, year, url, color } = vehicle

                    const detail = `<section>
                        <h2>${name}</h2>
                        <a href="${url}">
                            <img src="${image}">
                            <form action="/api/likeVehicle/${id}" method="POST">
                            <button>${like ? "🤎" : "🤍"}</button>
                            </form>
                        </a>
                        <h4>${maker}   ${year}  color: ${color}</h4>
                        <p> ${description}</p>
                        </section>`

                    fs.readFile(path.join(__dirname, '../../views/detail.html'), 'utf8', (error, content) => {
                        if (error) return handleError(error)

                        res.send(content.replace('{detail}', detail))

                    })
                })
            } else return handleError(new Error(`sorry, could not retrieve vehicle with id ${vehicleId}`))

        })
    } else res.redirect('/login')



}