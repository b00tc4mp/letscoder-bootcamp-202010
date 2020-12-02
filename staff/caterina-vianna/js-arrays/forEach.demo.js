console.log("Demo ForEach");
var numbers = ["hello", 2, 3, 4, 5, 6];
var otherNumbers = [6, 7, 8, 9];

forEach(numbers, function (value) {
  if (value === "hello") console.log(value + "!");
});

/* var numbers = ["hello",2,3,4,5,6]
var otherNumbers = [6,7,8,9]

var result = []

forEach(numbers, function(value) {
     if (value > 5) var result = value + 10 

     console.log(result)

}) 


function forEach(array, expression) {
    for (var i = 0; i < array.length; i++) {
        var item = array[i]

        expression(item)
    }
} */

var students = ["marta", "caterina", "beto"];

forEach(students, function (value) {
  if (value === value.toLowerCase()) {
    value = value.toUpperCase();
    console.log(value);
  }
});

var days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

console.log(days[0]);

let sayHello = function () {
  console.log("Hello!!!");
};

console.log(days.forEach(sayHello));

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
