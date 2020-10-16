
var reduceFunction = function reduce(arr, callback, initialValue) {

    //if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    //if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');
  
    if (initialValue !== undefined) {
        var accum = initialValue;

        for (var i = 0; i < arr.length ; i++) {
            var element = arr[i];

            accum = callback(accum, element, i, arr);
      
          }
          return accum;

    } else {
        var accum = arr[0];

        for (var i = 1; i < arr.length ; i++) {
            var element = arr[i];

            accum = callback(accum, element, i, arr);
      
          }
          return accum;
    } 

}


  



