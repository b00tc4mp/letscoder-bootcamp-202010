function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a query')

    if (!query.trim().length) throw new Error('query is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`,
        {}, '', function (status, response) {
            if (status === 200) {
                const res = JSON.parse(response)

                callback(null, res)
            } else callback(new Error('sorry, cannot search :('))
        })
}