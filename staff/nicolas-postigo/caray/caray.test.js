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
    console.assert(c[0] === value, 'should first item match');
})();

(function () {
    console.log(' should create a Caray of a length bigger than 1 when it receives several areguments');
    
   
    var value = ['hello world', true, null, undefined, { hello: 'world' }, ['hello', 'world']];

    var c = new Caray(value[0], value[1], value[2], value[3], value[4], value[5]);



    console.assert(c.length > 1, "should length be bigger than 1");
    for (var i = 0; i < c.length; i++){
        console.assert(value[i]===c[i], "should be the same value");
    }
})();