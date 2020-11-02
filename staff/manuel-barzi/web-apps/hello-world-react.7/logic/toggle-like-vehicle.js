const toggleLikeVehicle = (token, vehicleId, callback) => {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof vehicleId !== 'string') throw new TypeError(vehicleId + ' is not a vehicleId')

    if (!vehicleId.trim().length) throw new Error('vehicleId is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
        (status, response) => {
            if (status === 200) {
                const { likes = [] } = JSON.parse(response)

                const index = likes.indexOf(vehicleId)

                if (index > -1) likes.splice(index, 1)
                else likes.push(vehicleId)

                call('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users/',
                    {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json'
                    },
                    JSON.stringify({ likes }),
                    (status, response) => {
                        if (status === 204)
                            callback(null)
                        else {
                            var response = JSON.parse(this.responseText)

                            callback(new Error(response.error))
                        }
                    }
                )
            } else {
                const { error } = JSON.parse(response)

                callback(new Error(error))
            }
        })
}