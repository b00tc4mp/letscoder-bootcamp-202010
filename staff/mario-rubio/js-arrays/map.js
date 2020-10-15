function map(arr, expression){
    if (!(arr instanceof Array)) throw new TypeError ( arr + " is not an array")
    if (typeof expression !== "function") throw new TypeError (expression + " is not a function")
    // console.log(arr[1])
    var newarr = []
    for(var i = 0; i<arr.length; i++){
        // console.log(arr[i])
        newarr.push(expression(arr[i]))

    }
    return newarr
}

