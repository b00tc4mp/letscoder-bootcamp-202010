var array = [1, 2, 3, 4, 5]

function multiplyBy10(element) {
    return element * 10
}

/*
var result = []

for (var i = 0; i < array.length; i++) {
    result[i] = multiplyBy10(array[i])
}
*/

function map(array, callback) {
    var result = []

    for (var i = 0; i < array.length; i++) {
        result[i] = callback(array[i])
    }

    return result
}

var result = map(array, multiplyBy10)

var result = map(array, function(value) { return value + '' })

var result = map([true, false, true, false], function(value) { return (value + '').toUpperCase() })