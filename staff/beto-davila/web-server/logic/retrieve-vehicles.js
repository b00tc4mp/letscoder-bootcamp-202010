const { call } = require('../utils/indexer')
const { validateCallback } = require('./helpers/validations')

module.exports = (vehicleId, callback) => {
    if (typeof vehicleId !== 'string') throw new TypeError(vehicleId + ' is not a vehicleId')

    if (!vehicleId.trim().length) throw new Error('vehicleId is empty or blank')

    validateCallback(callback)

    call('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`, {}, '',
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