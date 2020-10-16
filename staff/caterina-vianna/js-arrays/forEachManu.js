var nums = [11, 22, 33, 44, 55];

console.log("calculate the remainer by 2 of each item from array", nums);

var result = [];

forEach(nums, function (value) {
  var remainder = value % 2;

  if (remainder === 0) result.push(value);
});

console.log(result);

console.log("show each item in the console from array", nums);

forEach(nums, console.log);

console.log(
  "multiply each item by 10 and send it to the console from array",
  nums
);

forEach(nums, function (value) {
  console.log(value * 10);
});
function forEach(array, expression) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];

    expression(item);
  }
}

var array = ["one", "two", "three"];
var newArray = array.map(function (value) {
  return value + "!";
});
console.log(newArray);
