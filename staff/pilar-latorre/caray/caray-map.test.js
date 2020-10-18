/*console.log('TEST Caray.prototype.map()');

(function(){
    console.log(' Should return the numbers 1,2,3,4 multiply by 2')

var c = new Caray;
c[0] = Math.random();
c[1] = 2;
c[2] = 3;
c[3] = 4;
c.length = 4;

var iterations = 0;

var result = c.map(function(value){
    iterations++

    return value*2
})
console.assert(result.length === 4, "should")

console.assert(result[0] === c[0]*2)

})()*/

console.log('TEST Caray.prototype.map()');

(function () {
    console.log(' should map numbers multiplied by 10')

    var c = new Caray

    c[0] = Math.random()
    c[1] = Math.random()
    c[2] = Math.random()
    c[3] = Math.random()
    c[4] = Math.random()

    c.length = 5

    var iterations = 0

    var result = c.map(function (item) {
        iterations++

        return item * 10
    })

    console.assert(result instanceof Caray, 'should result be instance of Caray')
    console.assert(result.length === 5, 'should result length match the original Caray')

    console.assert(iterations === 5)

    /*
    console.assert(result[0] === c[0] * 10)
    console.assert(result[1] === c[1] * 10)
    console.assert(result[2] === c[2] * 10)
    console.assert(result[3] === c[3] * 10)
    console.assert(result[4] === c[4] * 10)
    */
    for (var i = 0; i < c.length; i++)
        console.assert(result[i] === c[i] * 10)
})();

(function(){
    console.log(' should fail on non-function callback');

    var pepe = new Caray (undefined,1,false,null);

    var fail;

    try {
        pepe.map(33);
    } catch (error) {
        fail = error;
    }
console.assert(fail instanceof TypeError, "should be a TypeError");
console.assert(fail.message === "33 is not a function", "the error message is not correct");

})();