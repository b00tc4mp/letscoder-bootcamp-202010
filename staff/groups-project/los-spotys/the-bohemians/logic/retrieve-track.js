function retrieveTrack(token, spotyToken, id, callback) {
    if (typeof spotyToken !== 'string') throw new TypeError(spotyToken + ' is not a spotyToken')

    if (!spotyToken.trim().length) throw new Error('spotyToken is empty or blank')

    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof id !== 'string') throw new TypeError(id + ' is not a id')

    if (!id.trim().length) throw new Error('id is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')


    call('GET', `https://api.spotify.com/v1/tracks/${id}`,
    {Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${spotyToken}` 
    }, '', function(status, response) {
        if (status === 200) {
            let track = JSON.parse(response)

            let { id, name: song, preview_url: preListening, album, artists, favourite } = track

            track = ({  id, song, preListening, image: album.images[1].url, releaseDate: album.release_date, artist: artists[0].name, album: album.name, favourite  })


            if (track)
            call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
                (status, response) => {
                    if (status === 200) {
                        const { favourites = [] } = JSON.parse(response)

                        track.favourite = favourites.includes(track.id)

                        callback(null, track)
                    }
                })
        else callback(null, track, type, query)
            
        } else {
            const { error } = JSON.parse

            callback(new Error(error))
            
        }
    })
}



