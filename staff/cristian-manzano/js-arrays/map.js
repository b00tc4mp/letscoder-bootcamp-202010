function map(array, callback) {
    if (!(array instanceof Array)) throw TypeError('array not an array');
    if (typeof callback !== 'function') throw TypeError('callback not a function');
    var result = [];
    for (i = 0 ; i < array.length; i++) {
        result[i] = callback(array[i], i);
    }
    return result;
}



/*function map(array, callback) {
    if (!(array instanceof Array)) throw TypeError('array not an array');
    if (typeof callback !== 'function') throw TypeError('callback not a function');
    var result = [];
    for (i = 0 ; i < array.length; i++) {
        result[i] = callback(array[i], i);
    }
    return result;
}*/



function map(array, callback) {
    if (!(array instanceof Array)) throw TypeError('array not an array');
    if (typeof callback !== 'function') throw TypeError('callback not a function');
    var result = [];
    for (i = 0 ; i < array.length -2; i++) {
        result[i] = callback(array[i], i);
    }
    return result;
}
