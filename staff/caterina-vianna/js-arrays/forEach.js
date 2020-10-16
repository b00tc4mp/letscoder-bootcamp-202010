var numbers = ["hello", 2, 3, 4, 5, 6];
var otherNumbers = [6, 7, 8, 9];

var result = [];

forEach(numbers, function (value) {
  if (value === "hello") console.log(value + "!");
});

function forEach(array, expression) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];

    expression(item);
  }
}

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
