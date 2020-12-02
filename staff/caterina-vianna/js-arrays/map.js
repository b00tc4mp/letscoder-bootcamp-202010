/* var array = ["one","two","three"]
var newArray = array.map(function(value) {
    return value + "!"
})
console.log(newArray) */

var array = ["one", "two", "three"];
var newArray = [];

function newArrayP(argumento) {
  return argumento + "!";
}

for (var i = 0; i < array.length; i++) {
  newArray[i] = newArrayP(array[i]);
}

console.log(newArray);
