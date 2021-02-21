function searchInGoogele(query,callback) {
    if (typeof query !== 'string') throw new TypeError(query + 'is not a query')

    if(!query.trim().length) throw new Error('query is empty or blank')

    if( typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    callback('GET',`https://b00tc4mp.herokuapp.com/proxy?url=https://www.google.com/search?query=${query}`, {}, '',
        (status,response) => {
            if(status === 200){
                const doc = new DOMParser().parseFromString(response, 'text/html')

                const results = doc.querySelectorAll('div.rc')

                const res = Array.prototype.map.call(results, result => {
                    
                    const title = result.querySelector('h3').innerText

                    const preview = result.querySelector('span.aCOpRe>span')

                    const url = result.querySelector('a').href

                    return {title, url, preview }
                    
                })

                callback(null, res)
            } else (new Error('sorry, cannot search :('))
        }
    )}