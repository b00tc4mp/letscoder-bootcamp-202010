const retrieveVehicle = (token, vehicleId, callback) => {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')
    
    if (typeof vehicleId !== 'string') throw new TypeError(vehicleId + ' is not a vehicleId')

    if (!vehicleId.trim().length) throw new Error('vehicleId is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`, {}, '',
        (status, response) => {
            if (status === 200) {
                const vehicle = JSON.parse(response)

                if (vehicle)
                    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
                        (status, response) => {
                            if (status === 200) {
                                const { likes = [] } = JSON.parse(response)

                                vehicle.like = likes.includes(vehicle.id)

                                callback(null, vehicle)
                            }
                        })
                else callback(null, vehicle)

            } else {
                const { error } = JSON.parse(response)

                callback(new Error(error))
            }
        })
}