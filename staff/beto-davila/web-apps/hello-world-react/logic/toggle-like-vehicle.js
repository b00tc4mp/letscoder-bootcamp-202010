// Call firstly the users API like were retrieving user. Arguments we need are token and vehicleId to fill our array 'likes'.
const toggleLikeVehicle = (token, vehicleId, callback) => {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof vehicleId !== 'string') throw new TypeError(vehicleId + ' is not a vehicleId')

    if (!vehicleId.trim().length) throw new Error('vehicleId is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    
    // retrieving the user's properties to modify 'likes' array 
    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
        (status, response) => {
            if (status === 200) {
                const { likes = [] } = JSON.parse(response) // parse the response to js object and initialize the 'likes' array using destructuring.

                const index = likes.indexOf(vehicleId) // search for the position in the array where the vehicleId is located (if found) and save it in 'index'

                if (index > -1) likes.splice(index, 1) // if found, 'index' will be > -1 and the item will be deleted from the array with slice array method.
                else likes.push(vehicleId) // otherwise push the new item into the array to save it. The goal is a 'toggle-like' action (If found it, delete it, if did not, push it).

                // calling user's API to send the new update to the server.
                call('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users/',
                    {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json'
                    },
                    JSON.stringify({ likes }), // converting to JSON the new updated array
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