console.log('TEST Caray.prototype.filter()');

(function(){
console.log (" should put in a new caray words with length bigger than 6");

var months = new Caray ("January", "February", "March", "April", "May", "June");

var iterations = 0;

var result = months.filter(function (value){
    iterations++

    return value.length>6;
})

console.assert(result[0]=== "January", "Shoul the result[0] be January");
console.assert(result[1]=== "February", "Shoul the result[1] be February");
console.assert(result.length === 2, "shoul the resul length de 2");
console.assert(months.length === 6, "should the months be 6")
console.assert(iterations === 6, "should the iterations de 6");

})();


(function(){
console.log (" should throw an error if callback is not a function");

    var months = new Caray ("January", "February", "March", "April", "May", "June");

    var fail

    try {
        months.filter("a")
        
    } catch (error) {
        fail = error;
    }
console.assert(fail instanceof TypeError, "should be TypeError");
console.assert(fail.message === "a is not a function","the error message is not correct");



})();