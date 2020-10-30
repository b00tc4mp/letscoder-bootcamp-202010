//TODO
const retrieveVehicle = (vehicleID, callback) => {
    if (typeof vehicleID !== 'string') throw new TypeError(vehicleID + 'is not an vehicleID'); 
    if (!vehicleID.trim().length) throw new Error('vehicleID is empty or blank');
    if (typeof callback !== 'function') throw new TypeError(callback + 'is not a callback');

    call('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleID}`,
    {}, '', (status, response) => {
        if (status === 200) {
            const res = JSON.parse(response)

            callback(null, res)
        } else {
            const { error } = JSON.parse(response)

            callback(new Error(error))
        }
    })
}