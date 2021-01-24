function map(array, expression){
    if (!(array instanceof Array)) throw new TypeError ( array + " is not an array")
    if (typeof expression !== "function") throw new TypeError (expression + " is not a function")
    // console.log(arr[1])
    var newarr = []
    for(var i = 0; i<array.length; i++){
        // console.log(arr[i])
        newarr.push(expression(array[i]))

    }
    return newarr
}

