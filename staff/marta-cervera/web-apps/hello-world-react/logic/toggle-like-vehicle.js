const toggleLikeVehicle = (token, vehicleId, callback) => {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof vehicleId !== 'string') throw new TyoeError('vehicle is empty or blank')

    if (!vehicleId.trim().length) throw new Error('vehicle is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback+ ' is not a callback')

    
}