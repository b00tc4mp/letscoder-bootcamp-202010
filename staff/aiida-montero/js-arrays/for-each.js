function forEach (array, expresion) {
    if(!(array instanceof Array)) throw new TypeError(array+ " is not an array")
    if(typeof expresion !== "function") throw new TypeError(expresion + " is not an function")
    for (var i= 0; i < array.length; i ++) {
        expresion(array[i])
    }
 }