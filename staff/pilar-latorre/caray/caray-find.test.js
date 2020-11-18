console.log('TEST Caray.prototype.find()');

(function(){
    console.log( ' should give us the first number that is bigger than 100');

var number = new Caray (5, 12, 8, 130, 44);

var iterations = 0;

var result = number.find(function(value){
    iterations++

    return value>100;

})

console.assert(result === 130, "should the result be 130");
console.assert(result.length === undefined, "should the result length be undefined");
console.assert(!(result)<100, "should the result be bigger that 100");
console.assert(number.length === 5, "should the number length be 5");
console.assert(iterations === 4, "should the iterations be 4");

})();

(function(){
console.log (" should show the first number lower than 0.5");

var c = new Caray (Math.random(),Math.random(),Math.random(),Math.random(),Math.random());

c.length = 5;

var iterations = 0;

var result = c.find(function(value){
    iterations++

    return value<0.5;

})

console.assert(typeof result === "number", "should the result be a number");
console.assert(result.length === undefined, "should result length undefined");
console.assert(result<0.5, "should the result be lower than 0.5");



})();


(function(){
console.log("should throw an error if callback is not a funcion");

var number = new Caray (5, 12, 8, 130, 44);

var fail;

try {
    number.find(12);
} catch (error) {
    fail = error;
}
console.assert(fail instanceof TypeError, "should be a TypeError");
console.assert(fail.message === "12 is not a function", "the error message is not correct");


})();

