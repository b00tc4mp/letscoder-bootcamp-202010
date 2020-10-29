function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a query');

    if (!query.trim().length) throw new Error('query is empty or blank');

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback');

    call('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`, {}, '',
        (status, response) => {
            if (status === 200) {

                var res = JSON.parse(response);

                var doc = new DOMParser().parseFromString(response, "text/html");

                const results = doc.querySelectorAll('pre')

                Array.prototype.map.call(results, result => {
                    const thumbnail = result.thumbnail;

                    const name = result.name;

                    const price = result.price;

                    return { thumbnail, name, price } // return obj
                })

                // returns the results to the callback 'Results'
                callback(null, res);
            } else callback(new Error('sorry, cannot search :('));
        });


}