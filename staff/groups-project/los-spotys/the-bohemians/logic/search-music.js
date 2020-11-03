function searchMusic(token, type, query, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof query !== 'string') throw new TypeError(query + ' is not a query')

    if (!query.trim().length) throw new Error('query is empty or blank')

    if (typeof type !== 'string') throw new TypeError(type + ' is not a type')

    if (!type.trim().length) throw new Error('type is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')


call('GET', `https://api.spotify.com/v1/search?q=${query}&type=${type}`,
{Accept: "application/json",
"Content-Type": "application/json",
Authorization: `Bearer ${token}` 
}, '', function(status, response) {
    if (status === 200) {
        var music = JSON.parse(response)



         callback(null, music.tracks.items)
        
    } else callback(new Error('sorry, cannot search'))

})
}



        // var music = JSON.parse(response)

        // var doc = new DOMParser().parseFromString(response, "text/html")
        
        // const results = doc.querySelectorAll('pre.code')
    
        // Array.prototype.map.call(results, result => {

        // const track = result.item[0]

        // return (track)
        // })
















// var doc = new DOMParser().parseFromString(response, "text/html")

// const results = doc.querySelectorAll('pre')

// Array.prototype.map.call(results, result => {

// const name = result.name

// const thumbnail = result.thumbnail

// const price = result.price

// return { name, thumbnail, price}

// })




// callback(null, res)

// } else callback(new Error('sorry, cannot search'))


// console.log(res)
//