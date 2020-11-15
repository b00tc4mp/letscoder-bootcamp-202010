const { call } = require('../utils')
const { validateVehicleId, validateCallback } = require('./helpers/validations')

module.exports = (vehicleId, callback) => {
    validateVehicleId(vehicleId)
    validateCallback(callback)

    call('GET', `https://b00tc4amp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`, {}, '',
    (status, response) => {
        if (status === 200) {
            const vehicle = JSON.parse(response)

            callback(null, vehicle)
        } else {
            const { error } = JSON.parse(response)

            callback(new Error(error))
        }
    })
}