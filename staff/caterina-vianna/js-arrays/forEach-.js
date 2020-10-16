function forEach(array, expression) {
  if (!(array instanceof Array))
    throw new TypeError(array + " is not an array");
  if (typeof expression !== "function")
    throw new TypeError(expression + " is not an function");
  for (var i = 0; i < array.length; i++) {
    var item = array[i];

    expression(item);
  }
}
