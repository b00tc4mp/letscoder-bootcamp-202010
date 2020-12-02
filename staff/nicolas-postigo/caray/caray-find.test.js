console.log("TEST Uint8ClampedArray.prototype.find()");

(function (){
    console.log ( "sould give us the first value bigger than 100" )

    var numbers = new Caray (5, 12, 8, 130, 44);
    var iterations = 0;

    var result = numbers.find(function (value){
        iterations++;

        return value >100
    })




console.assert(result === 130, "should the result be 130")
console.assert(result.length === undefined, "should the result lengrh be undefined")
console.assert(!(result)< 100, "shold the result be bigger than 100")
})();
(function (){
console.log(" should find first number lower than 100")

var c = new Caray(Math.random(), Math.random(), Math.random(), Math.random(), Math.random())

c.length = 5

var iterations = 0

var result = c.find(function(value) {
    iterations++;

    return value < 0.5


})

console.assert(typeof result === "number", "should the result be a number")
console.assert(result.length === undefined, "should result length undefined")
console.assert(result<0.5, "should the result be lower than 0.5")

})

(function (){
console.log("should throw an error if callback is not a function");

var numbers = new Caray (5, 12, 8, 130, 44);

var fail;

try {
    numbers.find(12)
}   catch(error) {
    fail = error;
}

console.assert(fail instanceof TypeError, "should be a TypeError")
console.assert(failmessage === "12 is not a fucntion", "the error message is not correct")

})