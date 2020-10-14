
var names = ['alberto', 'aida', 'marta', 'margarita', 'manu', 'pilar', 'lucas', 'federico'];


function filter(callback, arr) {
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
    
        if (callback(arr[i])) {

        newArr.push(arr[i]);

        }

    }
    return newArr
}

    function longNames(name) {
        
        if (name.length > 7) {

            return true;

        }else{

            return false;
        }
    }

filter(longNames, names);