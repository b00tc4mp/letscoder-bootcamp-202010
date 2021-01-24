function filter(array, expression) {
    var result = []

    for (var i = 0; i < array.length; i++) {
        var value = array[i]

        if (expression(value)) result.push(value)
    }

    return result
}