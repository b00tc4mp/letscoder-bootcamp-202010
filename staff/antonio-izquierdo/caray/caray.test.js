console.log('TEST Caray (constructor)');

(function () {
    console.log(' should create a Caray of length 10 when it receives only that argument')

    var c = new Caray(10)

    console.assert(c.length === 10, 'should length be 10')

    for (var i = 0; i < c.length; i++)
        console.assert(c[i] === undefined, 'should item at index ' + i + ' be undefined')
})();

(function () {
    console.log(' should fail when it receives only one numeric non-integer argument')

    var fail

    try {
        var c = new Caray(10.10)
    } catch (error) {
        fail = error
    }

    console.assert(fail, 'should fail be defined')
    console.assert(fail instanceof RangeError, 'should error be an instance of RangeError')
    console.assert(fail.message === 'Invalid array length', 'should error message match')
})();

(function () {
    console.log(' should create a Caray of length 1 when it receives only one argument non-numeric and non-integer')

    var value = ['hello world', true, null, undefined, { hello: 'world' }, ['hello', 'world']].random()

    var c = new Caray(value)
    
    console.assert(c.length === 1, 'should length be 1')
    console.assert(c[0] === value, 'should first item match')
})();

(function () {
    console.log(' should create a Caray of length more than 1 argument when it recieves some arguments')

    var c = new Caray(1, "hola")

    console.assert(c.length === 2, 'length should be 2')
})();


(function() {
    console.log(' should return random values')

    var c1 = Math.random()
    var c2 = Math.random() > .5? ["a,b,c,d,e,f"] : [""]
    var c3 = Math.random() > .5? true : false
    var c4 = Math.random() > .5? null : undefined
    var c5 = Math.random() > .5? 0 : -1
    
    var c = new Caray(c1, c2, c3, c4, c5)
  
    console.assert(c1 === c[0], 'result of Caray function on index 0 should equal c[0]')
    console.assert(c2[0] === c[1][0], 'result of Caray function on index 1 should equal c[1]')
    console.assert(c3 === c[2], 'result of Caray function on index 2 should equal c[2]')
    console.assert(c4 === c[3], 'result of Caray function on index 3 should equal c[3]')
    console.assert(c5 === c[4], 'result of Caray function on index 4 should equal c[4]')
})();
