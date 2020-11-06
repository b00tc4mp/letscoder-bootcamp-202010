function retrievePerson(personId, callback) {
    if (typeof personId !== 'number') throw new TypeError(personId + ' is not a rigth id')

    if (personId === undefined) throw new Error('personId is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET', `https://api.themoviedb.org/3/person/${personId}?api_key=e187746b7167e4886a5d0a2f1ead5a18&language=en-US`,
        {}, '', function (status, response) {
            if (status === 200) {
                const person = JSON.parse(response)

                callback(null, person)
            } else {
                const { error } = JSON.parse(response)
                
                callback(new Error(error))
            }
        })
}