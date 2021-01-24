console.log('Test Caray (constructor');

(function() {
    
    console.log(' should create a Caray of length 10 if it receives only "10" as argument');

    var c = new Caray(10);

    console.assert(c.length === 10, 'should length be 10');

    for (var i = 0; i < c.length; i++) {
        console.assert(c[i] === undefined, 'should item at index ' + i + ' be undefined');
    }
})();

(function() {
    
    console.log(' should fail when it receives only one numeric non-integer argument');

    var fail;

    try {
        var c = new Caray(10.10);
    } catch(error) {
        fail = error;
    }

    console.assert(fail, 'should fail be defined');
    console.assert(fail instanceof RangeError, 'should error be an instance of RangeError');
})();