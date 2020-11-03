function retrieveTrack(token, id, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    //if (typeof id !== 'string') throw new TypeError(id + ' is not a id')

    //if (!id.trim().length) throw new Error('id is empty or blank')

    //if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')


    call('GET', `https://api.spotify.com/v1/tracks/${id}`,
    {Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}` 
    }, '', function(status, response) {
        if (status === 200) {
            var track = JSON.parse(response)



            callback(null, track)
            
        } else callback(new Error('sorry, cannot search'))

    })
}