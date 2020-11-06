/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {Array} tracks The 20 tracks the API shows in every search
 */

/**
 * search Tracks by means of token, spotyToken, type, and query.
 * 
 * @example
 * 
 * searchTracks(token, spotyToken, type, query, function(error, tracks){
 *    console.log('DEMO music()')
 *   
 *    if (error) console.error(error)
 *    else console.log(tracks)
 *  })
 * 
 * @param {string} token The token given by authenticate
 * @param {string} spotyToken The token given by validation on spotify
 * @param {string} type The type of the search we are doing. To work the app correctly us 'track'
 * @param {string} query The track we want to search
 * 
 * @param {callback} callback The callback expression that manages the result of the authentication
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */


function searchTracks(token, spotyToken, type, query, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof spotyToken !== 'string') throw new TypeError(spotyToken + ' is not a spotyToken')

    if (!spotyToken.trim().length) throw new Error('spotyToken is empty or blank')

    if (typeof query !== 'string') throw new TypeError(query + ' is not a query')

    if (!query.trim().length) throw new Error('query is empty or blank')

    if (typeof type !== 'string') throw new TypeError(type + ' is not a type')

    if (!type.trim().length) throw new Error('type is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')


    call('GET', `https://api.spotify.com/v1/search?q=${query}&type=${type}`,
        {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${spotyToken}`
        }, '', function (status, response) {
            if (status === 200) {
                let {tracks: {items: tracks}} = JSON.parse(response)
                
                tracks = tracks.map(({ name: song, id, preview_url: preListening, artists, album }) => ({ song, id, preListening, artist: artists[0].name ? artists[0].name : 'this song doesn´t have an artist', image: album.images[1].url ? album.images[1].url : 'http://hem.bredband.net/b477738/not-found.jpg', releaseDate: album.release_date}))

                call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
                    (status, response) => {
                        if (status === 200) {
                            const { favourites = [] } = JSON.parse(response)

                           tracks.forEach(track => track.favourite = favourites.includes(track.id))

                            callback(null, tracks)

                        }
                    })
            } else callback(new Error('sorry, cannot search'))

        })
}