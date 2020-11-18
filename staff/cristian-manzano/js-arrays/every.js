function every (array, callback) {
    if (!(array instanceof Array)) throw TypeError('array not an array');
    if (typeof callback !== 'function') throw TypeError('callback not a function');
    for (var i = 0; i < array.length; i++){
        if(!(callback(array[i]))){
        return false;
        }
    }
    return true
}