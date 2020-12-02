function every(array, callback){
    if(!(array instanceof Array)) throw new TypeError(array + " is not an array")
    if(typeof callback !== "function") throw new TypeError(callback + " is not a fuction")
    for (var i = 0; i < array.length; i++) {
        
        if (!callback(array[i])) return false
    }
    return true
}
