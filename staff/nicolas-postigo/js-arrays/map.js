function map (array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    var result = []
    for (i = 0; i < array.length; i++) {
        result[i]=callback(array[i],i)
    }
return result;
}
