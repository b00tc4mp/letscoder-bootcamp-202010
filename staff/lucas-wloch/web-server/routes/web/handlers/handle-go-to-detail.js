const fs = require('fs')
const path = require('path')
const { retrieveVehicle, retrieveUser } = require('../../../logic')

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

                    // const { like, id,  name, image, description, maker, year, url, color } = vehicle

                    res.render('detail', { detail: vehicle } , (error, html) => {
                        if (error) return handleError(error)

                        res.send(html)

                    })
                })
            } else return handleError(new Error(`sorry, could not retrieve vehicle with id ${vehicleId}`))

        })
    } else res.redirect('/login')



}