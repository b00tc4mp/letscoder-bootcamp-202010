console.log ("TEST Caray.prototype.find()");

(function(){

console.log(" shoul show the first number bigger than 100");

var number = new Caray (5, 12, 8, 130, 44);

var iterations = 0;

var result = number.find(function(value){
    iterations++

    return value>100
})

console.assert(result === 130, " should the result be 130");
console.assert(result.length === undefined, " should the length be undefined");
console.assert(!result<100, "should the result be under 100");
console.assert(number.length === 5, " should the number length be 5");
console.assert(iterations === 4, " should iterations be 4");

})();

(function() {
console.log(" should find first number lower than 0.5");

var c = new Caray (Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),);

c.length = 5;
var iterations = 0

var result = c.find(function(value){
    iterations++

    return value<0.5;
})

console.assert(typeof result === "number", "should result be a number" );
console.assert(result.length === undefined, "should result length be undefined");
console.assert(result<0.5, "should be a number smaller than 0.5");

})();


(function(){
console.log (" should throw an error if callback is not a function");

    var c = new Caray (Math.random(),Math.random(),Math.random(),Math.random(),Math.random());

    var fail

    try {
        c.find(12);
    } catch (error)  {
        fail = error
    }
console.assert(fail instanceof TypeError, "should be a TypeError");
console.assert(fail.message === "12 is not a function","the error message is not correct");

})();