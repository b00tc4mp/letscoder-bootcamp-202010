// TODO call users api and get likes arrays
// TODO call vehicles api and retrieve each item id from likes array

const retrieveLikedVehicles = (token, callback) => {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
        (status, response) => {
            if (status === 200) {
                const { likes = [] } = JSON.parse(response)

                const vehicles = []

                let counter = 0

                likes.forEach((vehicleId, index) =>
                    call('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`, {}, '',
                        (status, response) => {
                            if (status === 200) {
                                const vehicle = JSON.parse(response)

                                vehicle.like = true

                                vehicles[index] = vehicle

                                counter++

                                if (counter === likes.length)
                                    callback(null, vehicles)
                            } else callback(new Error('cannot retrieve liked vehicles :('))
                        })
                )
            } else callback(new Error('sorry, cannot retrieve liked vehicles :('))
        })
}
