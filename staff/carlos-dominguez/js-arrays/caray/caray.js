function Caray() {
    if (arguments.length === 0) {
        this.length = 0;
    }
    if (arguments.length === 1) {
        var argument = arguments[0];
        if (typeof argument === 'number') {
            if (Number.isInteger(argument)) this.length = argument;
            else throw new RangeError('Invalid array length');
        } else {
            this[0] = argument;
            this.length = 1;
        }
    }
    if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
            this[i] = arguments[i];
        }
        this.length = arguments.length;
    }
}

// The push() method adds one or more elements to the end of an array 
// and returns the new length of the array.
Caray.prototype.push = function() {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }
}

// The every() method tests whether all elements in the array pass the test implemented 
// by the provided function. It returns a Boolean value.
Caray.prototype.every = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++)
        if (!callback(this[i])) return false;

    return true;
}

// The map() method creates a new array populated with the results of calling 
// a provided function on every element in the calling array.
Caray.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var result = new Caray;

    for (var index = 0; index < this.length; index++) {
        result[index] = callback(this[index], index, this);
        result.length++;
    }
    return result;
}

// The some() method tests whether at least one element in the array passes the test implemented 
// by the provided function. It returns a Boolean value.
Caray.prototype.some = function(callback, thisArg) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    for (var i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) return true;
    }
    return false;
}

// The forEach() method executes a provided function once for each array element.
Caray.prototype.forEach = function(callback, thisArg) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
}

// The filter() method creates a new array with all elements 
// that pass the test implemented by the provided function.
Caray.prototype.filter = function(callback, thisArg) {
    var newArr = new Caray;
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    for (var i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            newArr[newArr.length] = this[i]
            newArr.length++
        }
    }
    return newArr;
}

// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in single output value.
Caray.prototype.reduce = function(callback, initialValue) {
    var accumulator = (initialValue === undefined) ? undefined : initialValue;
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) {
        if (accumulator === undefined && i === 0) {
            accumulator = this[i];
        } else {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}

// The reverse() method reverses an array in place. 
// The first array element becomes the last, and the last array element becomes the first.
Caray.prototype.reverse = function() {
    var aux = "";
    for (var i = 0; i < this.length / 2; i++) {
        aux = this[i];
        this[i] = this[this.length - (i + 1)];
        this[this.length - (i + 1)] = aux;
    }
    return this;
}

// The concat() method is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.
Caray.prototype.concat = function(array) {
    var newArr = new Caray;
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array');

    for (var i = 0; i < this.length; i++) {
        newArr[i] = this[i];
        newArr.length++;
    }
    for (var i = 0; i < array.length; i++) {
        newArr[newArr.length] = array[i];
        newArr.length++;
    }
    return newArr;
}

// The find() method returns the value of the first element in the provided array 
// that satisfies the provided testing function.
Caray.prototype.find = function(callback, thisArg) {
    for (var i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) return this[i];
    }
}