function map(arr, callback){
    if (!(arr instanceof Array)) throw new TypeError ( arr + ' this is not an array')
    if (typeof callback !== 'function') throw new TypeError (callback + ' is not a function' )

    var newarr = []
    for (var i = 0; i < arr.length; i++) {
        newarr.push(callback(arr[i]) )
        
    
    } return newarr
}

