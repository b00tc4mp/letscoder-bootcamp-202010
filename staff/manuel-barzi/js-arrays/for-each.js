function forEach(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')    

    for (var index = 0; index < array.length; index++) {
        var element = array[index]

        callback(element, index, array)
    }
}