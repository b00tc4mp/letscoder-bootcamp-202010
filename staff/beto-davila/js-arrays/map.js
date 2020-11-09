/** 
* The map() method creates a new array populated with the results 
* of calling a provided function on every element in the calling array.

* So how does .map() work? Basically is takes 2 arguments, a callback and an optional context.
* The callback runs for each value in the array and returns each new value in the resulting array.
**/


var mapFunction = function (callback, arr) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');

    var newArr = [];

    for (var i = 0; i < arr.length ; i++) {

        newArr[i] = callback(arr[i]);
    }  
    return newArr;
}

/*
try {
    mapFunction(cubeOfNumber, null);
} catch (error) {
    console.error(error);
}
*/






