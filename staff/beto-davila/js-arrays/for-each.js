
var forEachFunction = function (arr, callback) {  
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');
    
    for (var i = 0; i < arr.length; i++) {
        
        var item = arr[i];

        callback(item);
    }

}
