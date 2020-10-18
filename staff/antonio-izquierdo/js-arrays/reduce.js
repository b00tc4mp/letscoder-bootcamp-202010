function reduce(array, callback, initialValue) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')  

    if (initialValue !== undefined) {
        var accum = initialValue

        for (var index = 0; index < array.length; index++) {
            var element = array[index]

            accum = callback(accum, element, index, array)
        }

        return accum
    } else {
        var accum = array[0]

        for (var index = 1; index < array.length; index++) {
            var element = array[index]

            accum = callback(accum, element, index, array)
        }

        return accum
    }
}