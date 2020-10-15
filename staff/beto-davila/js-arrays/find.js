var years = [2002, 1986, 2005, 1999, 2020, 1998]; 


function find(callback, arr) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');

    for (var i = 0; i < arr.length; i++) {
       
        var element = arr[i];

        if(callback(element, i, arr)) {

            return element;
        }
    }
}

/*
try {
    find(callback, null);
} catch (error) {
    console.error(error);
*/