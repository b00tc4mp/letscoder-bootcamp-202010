var months = ['January', 'February', 'March', 'April', 'May', 'June'];

var join = function(array) {
  let result = '';

  for (var i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result;
};

console.log(join(months));

