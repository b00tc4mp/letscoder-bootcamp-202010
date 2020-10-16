var numYears = [1, 2, 3, 4, 5, 6, 7, 8, 9]


var reduceFunction = function reduce(arr, callback, initialValue) {

    //if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    //if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');
    debugger
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

function gainMoney(currentMoney, years) {
    debugger
    var rate = 0.03
    var total = currentMoney + (currentMoney * rate) * years

    return total

  

}

reduceFunction(numYears, gainMoney, 300)