var names = ['aida','alberto','nico','caterina','toño'];


var forEachFunction = function (arr, callback) {  
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');
    
    for (var i = 0; i < arr.length; i++) {
        
        var item = arr[i];

        callback(item);
    }
}

function sayHello(name) {

    console.log('Hello ' + name);
}

forEachFunction(names, sayHello);

/*
try {
    forEach(callback, null);
} catch (error) {
    console.error(error);
*/
