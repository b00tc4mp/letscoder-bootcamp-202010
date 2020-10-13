function map(array, callback) {
    var result = []

    for (var i = 0; i < array.length; i++) {
        result[i] = callback(array[i])
    }

    return result
}