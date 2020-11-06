/**
 *  The callback expression that manages the result of the retrieve tracks
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {string} track In case of success return a track from the spotyfy API
 */
/**
 * Retrieve a track by token.
 * 
 * @example
 * retrieveTrack(token, spotyToken, id, function(error, res) {
 *  console.log('DEMO Track()')
 *
 *   if (error) console.error(error)
 *  else console.log(res)
 * })
 * 
 * @param {string} token Token given by the authenticate
 * @param {string} spotyToken Token given by the Spotyfy API
 * @param {String} id Track id given by the Spotyfy API
 * @param {callback} callback The callback expression that manages the result of the retrieveTrack
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */

function retrieveTrack(token, spotyToken, id, callback) {
    
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof spotyToken !== 'string') throw new TypeError(spotyToken + ' is not a spotyToken')

    if (!spotyToken.trim().length) throw new Error('spotyToken is empty or blank')

    if (typeof id !== 'string') throw new TypeError(id + ' is not an id')

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



