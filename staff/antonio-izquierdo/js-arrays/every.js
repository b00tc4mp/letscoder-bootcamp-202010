function every(array, expression){
if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    for (var i = 0; i < arr.length; i++) {
        
        if (!expression(arr[i])) return false
    }
    return true
}