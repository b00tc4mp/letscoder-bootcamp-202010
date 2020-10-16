function map (array, callback) {

    if (!(array instanceof Array))throw TypeError(array+"is not an array")
    if (typeof callback !== "function")throw new TypeError (expresion + "is not a function")
    var result = [];
    for (i=0; i<array.length; i++) {
        result[i]=callback(array[i],i);

    }
    console.log("resultado de map")
    console.log (result)
    return result;



}

