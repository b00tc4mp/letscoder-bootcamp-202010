function every(arr, callback){
    if (!(arr instanceof Array)) throw new TypeError ( arr + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError (callback + " is not a function")
    
    for (var i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) return false
    }
    return true
}

