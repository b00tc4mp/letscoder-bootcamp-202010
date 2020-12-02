function Caray() {
  this.length = 0;
}

Caray.prototype.push = function () {
  for (var i = 0; i < arguments.length; i++) this[this.length] = arguments[i];
  this.length++;
};

Caray.prototype.some = function some(callback) {
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) return true;
  }
  return false;
};

Caray.prototype.every = function every(callback) {
  for (var i = 0; i < this.length; i++) {
    if (!callback(this[i])) return true;
  }
};

Caray.prototype.reduce = function reduce(array, callback, initialValue) {
  if (!(array instanceof Array))
    throw new TypeError(array + " is not an array");
  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a function");

  if (initialValue !== undefined) {
    var accum = initialValue;

    for (var index = 0; index < array.length; index++) {
      var element = array[index];

      accum = callback(accum, element, index, array);
    }

    return accum;
  } else {
    var accum = array[0];

    for (var index = 1; index < array.length; index++) {
      var element = array[index];

      accum = callback(accum, element, index, array);
    }

    return accum;
  }
};
