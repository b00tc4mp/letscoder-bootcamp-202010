console.log('TEST Caray.prototype.filter()');

(function(){
    console.log(' should put in a new Caray all the words that have the length bigger than 6' );

var months = new Caray ('January', 'February', 'March', 'April', 'May', 'June');

var iterations = 0;

var result = months.filter(function(value){
    iterations ++;
    
    return value.length>6;

})

console.assert(result[0] === "January", "should the result[0] be January" )
console.assert(result[1] === "February", "should the result[1] be February" )
console.assert(result.length === 2, "should the result lenght be 2")
console.assert(months.length === 6, "should the months lenght be 6")
console.assert(iterations === 6, "should the iterations be 6")


})();

(function(){
console.log( 'should throw an error if callback is not a function');

    var months = new Caray ('January', 'February', 'March', 'April', 'May', 'June');

    var fail;

    try {
        months.filter(months)
    } catch(error) {
        fail = error
    }

    
    console.assert(fail, 'should fail be defined')
    console.assert(fail instanceof TypeError, 'should fail be instance of TypeError')

})();
