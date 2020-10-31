function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a query')

    if (!query.trim().length) throw new Error('query is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://newsapi.org/v2/everything?q=${query}`,
        {'X-Api-Key': '1a6cabf9d7414412ab980b5693d5764f'}, '', function (status, response) {
            if (status === 200) {
                const res = JSON.parse(response)

                callback(null, res)
            } else callback(new Error('sorry, cannot search :('))
        })
}