function retrieveVehicle(vehicleId,callback){
    if (typeof vehicleId !== 'string') throw new TypeError(vehicleId + ' is not a vehicleId')
    if (!vehicleId.trim().length) throw new Error('vehicleId is empty or blank')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`,
    {},'',function(status,response){
        if (status === 200){
            const res = JSON.parse(response)
    
            callback(null,res)
        } else callback(new Error('sorry, cannot seach :('))
    })

}
