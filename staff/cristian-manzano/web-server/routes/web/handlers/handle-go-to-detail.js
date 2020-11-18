const fs = require('fs')
const path = require('path')
const retrieveVehicle = require('../../../logic/retrieve-vehicle')

module.exports = (req, res, handleError) => {
    const { params: { vehicleId }, session: { userId, cookiesAccepted } } = req

    if (!userId) {
        retrieveVehicle(vehicleId, (error, vehicle) => {
            if (error) return handleError(error)

            if (vehicle) {
                const { name, image, description, price, url } = vehicle

                fs.readFile(path.join(__dirname, '../../../views/detail.html'), 'utf8', (error, content) => {
                    if (error) return handleError(error)

                    res.send(content
                        .replace('{cookiesAccepted}', cookiesAccepted)
                        .replace('{name}', name)
                        .replace('{image', image)
                        .replace('{description}', description)
                        .replace('{price}', price)
                        .replace('url', url))
                })
            } else handleError(new Error(`sorry, could not retrieve vehicle with id ${vehicleId}`))
        })
    } else res.redirect('/')
}