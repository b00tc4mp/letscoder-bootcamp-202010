function some(array, callback){
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')  
    for (var i = 0; i < arr.length; i++) {
        
        if (callback(arr[i])) return true
    }
    return false
}