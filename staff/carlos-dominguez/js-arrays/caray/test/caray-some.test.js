(function() {
    var reason1 = 'should result be true';
    var conditionTest1 = false;
    var c = new Caray;
    c[0] = 10;
    c[1] = 20;
    c[2] = 30;
    c[3] = 40;
    c.length = 4;
    var result = c.some(function(element) {
        return (element > 30);
    })
    conditionTest1 = result === true;
    console.assert(conditionTest1, { result, c, reason1 });
})();

(function() {
    var reason1 = 'should result be false';
    var conditionTest1 = false;
    var c = new Caray;
    c[0] = 10;
    c[1] = 20;
    c[2] = 30;
    c[3] = 40;
    c.length = 4;
    var result = c.some(function(element) {
        return (element > 40);
    })
    conditionTest1 = result === false;
    console.assert(conditionTest1, { result, c, reason1 });
})();

(function() {
    var reason1 = 'should fail be defined';
    var reason2 = 'should fail be instance of TypeError';
    var reason3 = 'should error message match'
    var callback = [1, true, 'string', null, undefined, {}].random();
    var c = new Caray;
    var _error;
    try {
        c.some(callback)
    } catch (error) {
        _error = error
    }
    conditionTest1 = _error;
    console.assert(conditionTest1, { _error, reason1 });
    conditionTest2 = _error instanceof TypeError;
    console.assert(conditionTest2, { _error, reason2 });
    conditionTest3 = _error.message === callback + ' is not a function';
    console.assert(conditionTest3, { _error, reason3 });
})();