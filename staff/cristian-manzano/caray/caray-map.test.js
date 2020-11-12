console.log("TEST Caray prototype map");


var numbers = new Caray (1, 2, 3, 4, 5)

var result = new Caray();

var iterations = 0
numbers.map(function(value){
    newValue = value * 10;
    result[result.length] = newValue;
    iterations++
    result.length++;
    return value
})

console.assert(numbers.length === 5, "should length numbers be 5");
console.assert(result.length === 5, "should length result be 5");
console.assert(iterations === 5,"should iterations be 5");





(function(){
    console.log (' should fail on non function callback');


    var pepe = new Caray (undefined, 1, false, null);

    var fail;

    try {
        pepe.map(pepe);
    } catch (error) {
        fail = error;
    }
    console.assert(fail, 'should fail be defined')
    console.assert(fail instanceof TypeError, 'should fail be instance of TypeError')


})()