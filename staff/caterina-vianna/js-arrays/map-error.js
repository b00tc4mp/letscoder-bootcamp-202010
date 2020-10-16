// error handling uses the key words try, catch,finally.
//try{} lets test block of code for error
//catch{} handle the error
// throw{} let you create costum error
// finaly {}let you execute code after try and catch regardless of the result

var array = ["one", "two", "three"];
var newArray = [];

function newArrayP(argumento) {
  return argumento + "!";
}

for (var i = 0; i < array.length; i++) {
  newArray[i] = newArrayP(array[i]);
}

console.log(newArray);
