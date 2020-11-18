function searchVehicles(token, query, callback){
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')
    if (!token.trim().length) throw new Error('token is empty or blank')
    if (typeof query !== 'string') throw new TypeError(query + ' is not a query')
    if (!query.trim().length) throw new Error('query is empty or blank')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`,
    {},'',function(status,response){
        if (status === 200){
            const vehicles = JSON.parse(response)
            call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { authorization: `Bearer ${token}`},'',
            (status, response) => {
                if (status === 200){
                    const { likes = [] } = JSON.parse(response)

                    vehicles.forEach( vehicle => vehicle.like = likes.includes(vehicle.id))
                    
                    callback(null,vehicles)
                }
            })
        } else callback(new Error('sorry, cannot seach :('))
    })
}
