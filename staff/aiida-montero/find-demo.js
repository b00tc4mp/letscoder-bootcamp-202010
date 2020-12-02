var years = [2002, 1986, 2005, 1999, 2020, 1998];

if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');

function find(callback, arr) {

    for (var i = 0; i < arr.length; i++) {

        if(callback(arr[i])) {

            return arr[i];
        }
    }

    return false;

}


function isFromTheNineties (year) {

    if (year < 2000 && year > 1989) {

        return true;
    } else {

    return false;
    }

}

find(isFromTheNineties, years);