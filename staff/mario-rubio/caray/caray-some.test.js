console.log('TEST Caray.prototype.some()');

(function () {
    console.log(" should if there are some words that includes the leter u");
    var weather = new Caray 
    weather[0]="rain"
    weather[1]="sun"
    weather[2]="wind"
    weather.length = 3

    var iterations = 0

    var result = weather.some(function (name) {
        iterations++

        return name.includes('u')
})

console.assert(result === true, 'should result be true')
console.assert(iterations === 2, 'should iterations count be 2')
console.assert (weather.length === 3, "should weather.length be 3")
})();

(function(){
    console.log(" should throw an error if the callback is not a function");
    var weather = new Caray ("rain", "sun", "wind");

    var fail;
    try {
        weather.some ("pepito");
        
    } catch (error) {
        fail = error;
  
    }

    console.assert(fail instanceof TypeError, "Should be type error");
    console.assert(fail.message === "pepito is not a function", "the error message is not corretc");
})()