(function() {
    var reason1 = 'Longitud deberia ser 10';
    var reason2 = 'Los items deberia estar indefinidos';
    var conditionTest1 = false;
    var conditionTest2 = false;
    var c = new Caray(10);
    conditionTest1 = c.length === 10;
    console.assert(conditionTest1, { c, reason1 });
    for (var i = 0; i < c.length; i++) {
        if (c[i] !== undefined) { conditionTest2 = false; break; }
        conditionTest2 = true
    }
    console.assert(conditionTest2, { c, reason2 });
})();

(function() {
    var reason1 = 'should _error be defined';
    var reason2 = 'should error be an instance of RangeError';
    var reason3 = 'should error message match';
    var _error;
    try {
        var c = new Caray(10.10);
    } catch (error) {
        _error = error;
    }
    conditionTest1 = _error;
    console.assert(conditionTest1, { _error, reason1 });
    conditionTest2 = _error instanceof RangeError;
    console.assert(conditionTest2, { _error, reason2 });
    conditionTest3 = _error.message === 'Invalid array length';
    console.assert(conditionTest3, { _error, reason3 });
})();

(function() {
    var reason1 = 'should length be 1';
    var reason2 = 'should first item match';
    var conditionTest1 = false;
    var conditionTest2 = false;
    var value = ['hello world', true, null, undefined, { hello: 'world' },
        ['hello', 'world']
    ].random();
    var c = new Caray(value);
    conditionTest1 = c.length === 1;
    console.assert(conditionTest1, { c, reason1 });
    conditionTest2 = c[0] === value;
    console.assert(conditionTest2, { c, reason2 });
})();

(function() {
    var reason1 = 'should length be 4';
    var conditionTest1 = false;
    var c = new Caray('a', 5, 500, 'b');
    conditionTest1 = c.length === 4;
    console.assert(conditionTest1, { c, reason1 });
})();