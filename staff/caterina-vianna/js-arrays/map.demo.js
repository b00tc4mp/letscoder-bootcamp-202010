
// Basic array map methods:

/* - CurrentValue (current element being processed on the array)- For the basic the map method is going to run on an array and for each element inside an array is going to run a function. The return value of that function is going to be a new element inside a new array which is in place of the old element.  */
var array = ["one","two","three"]
var newArray = array.map(function(value) {
    return value + "!"
})
console.log(newArray)

 /*(returns new array: (3) ["one!", "two!", "three!"]
0: "one!"
1: "two!"
2: "three!")/*




/* // - Index (index of the current element inside the array). The index of the current element being processed on the array-optional)- This is going to be the actual array that the map method is called on.  
var array = ["one","two","three"]
var newArray = array.map(function(value,index) {
    console.log(index)
    return value + "!"
})
console.log(newArray)
/* (returns 0,1,2 and changes the elements inside the array with !)
or */

var array = ["one","two","three"]
var newArray = array.map(function(value,index) {
    return index + "-" + value + "!"
})
console.log(newArray)
/* (returns the array with index+modifications on the elements - (3) ["0-one!", "1-two!", "2-three!"]
0: "0-one!"
1: "1-two!"
2: "2-three!") */

//- Array parameter. This is going to be the actual array that the map method is called on. You usually use this option when you don't know what array you are calling it from.   

var oldArray = ["one","two","three"]
var newArray = oldArray.map(function(value,index,array) {
    console.log(array)
    return index + "-" + value + "!"
})
console.log(newArray)

// returns printed 3 times, one for each element before we get the final result:

/* (3) ["one", "two", "three"]
0: "one"
1: "two"
2: "three"
length: 3
__proto__: Array(0)

(3) ["one", "two", "three"]
0: "one"
1: "two"
2: "three"
length: 3
__proto__: Array(0)

(3) ["one", "two", "three"]
0: "one"
1: "two"
2: "three"
length: 3
__proto__: Array(0)

(3) ["0-one!", "1-two!", "2-three!"]
0: "0-one!"
1: "1-two!"
2: "2-three!"
length: 3
__proto__: Array(0) */



// - thisArg - This is past in outside of the function. You can set the value of "this" inside the callback function using "thisArg".Ej:
var oldArray = ["one","two","three"]
var newArray = oldArray.map(function(value,index,array) {
    console.log(array)
    return index + "-" + value + "!" + this.name;
}, {name: "John", age: 30});//thisArg

console.log(newArray)

//this.name refers to  thisArg
// The result returns printed 3 times, one for each element before we get the final result with thisArg added:
/* (3) ["one", "two", "three"]
0: "one"
1: "two"
2: "three"
length: 3
__proto__: Array(0)


(3) ["one", "two", "three"]
0: "one"
1: "two"
2: "three"
length: 3
__proto__: Array(0)


(3) ["one", "two", "three"]
0: "one"
1: "two"
2: "three"
length: 3
__proto__: Array(0)


(3) ["0-one!John", "1-two!John", "2-three!John"]
0: "0-one!John"
1: "1-two!John"
2: "2-three!John"
length: 3
__proto__: Array(0) */
