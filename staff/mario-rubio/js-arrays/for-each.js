function forEach(array, expression) {    
    if (!(arr instanceof Array)) throw new TypeError ( arr + " is not an array")
    if (typeof expression !== "function") throw new TypeError (expression + " is not a function")

    for (var i = 0; i < array.length; i++) {
        var item = array[i]

        expression(item)
    }
}
