function retrieveUser(vehicleId, callback) {
    if (typeof vehicleId !== 'string') throw new TypeError(token + 'is not a real vehicleId')

    if (!vehicleId.trim().length) throw new Error("vehicleId is empty or blank")

    if (typeof callback !== "function") throw new Error("callback is not a function")


    call('GET',
        `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${vehicleId}`, {}, '',
        (status, response) => {
            if (status === 200) {
                const res = JSON.parse(response)

                callback(null, response)

            } else {
                const { error } = JSON.parse(response)

                callback(new Error(resp.error))
            }
        }


    )
}