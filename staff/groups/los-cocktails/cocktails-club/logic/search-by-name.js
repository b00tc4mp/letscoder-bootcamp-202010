function searchByName(name,callback) {
    if( typeof name !== 'string') throw new TypeError(name + ' is not a cocktail');
    if(!name.trim().length) throw new Error('cocktail name is empty or blank');
    if (typeof callback !== 'function') throw new Error(callback + ' is not a callback');


    call('GET',
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
        {},
        '',
        function (status, response) {
            if (status === 200){
               var results = JSON.parse(response)
                callback(null, results) 
            }else {
                var res = JSON.parse(response)

                callback(new Error(res.error))
            }
        }
    )
}

