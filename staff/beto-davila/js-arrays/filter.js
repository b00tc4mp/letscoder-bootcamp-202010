var names = ['alberto', 'aida', 'marta', 'margarita', 'manu', 'pilar', 'lucas', 'federico'];

function filter(callback, arr) {
    
    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');

    var newArr = [];

    for (var i = 0; i < arr.length; i++) 
         if (callback(arr[i])) newArr[newArr.length] = arr[i];
    
    return newArr;
}

    function longNames(name) {
        if (name.length > 7) return name;
        return false;
    }
filter(longNames, names);