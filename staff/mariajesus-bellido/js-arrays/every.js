function every(array, expression){

    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array'); 
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function'); 
        
        for (var i = 0; i < array.lengh; i++) {

            if (!expression(array[i])) return false;
        }
        return true; 
}