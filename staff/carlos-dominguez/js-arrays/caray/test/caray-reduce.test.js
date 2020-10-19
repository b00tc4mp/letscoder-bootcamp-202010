(function() {
    var reason1 = 'should result be equal to the sum of all elements';
    var conditionTest1 = false;
    var c = new Caray;
    c[0] = Math.floor((Math.random() * 10) + 1);
    c[1] = Math.floor((Math.random() * 10) + 1);
    c[2] = Math.floor((Math.random() * 10) + 1);
    c[3] = Math.floor((Math.random() * 10) + 1);
    c[4] = Math.floor((Math.random() * 10) + 1);
    c[5] = Math.floor((Math.random() * 10) + 1);
    c[6] = Math.floor((Math.random() * 10) + 1);
    c[7] = Math.floor((Math.random() * 10) + 1);
    c.length = 8;
    var result = c.reduce(function(acum, element) {
        return acum + element;
    });
    conditionTest1 = result === c[0] + c[1] + c[2] + c[3] + c[4] + c[5] + c[6] + c[7];
    console.assert(conditionTest1, { result, reason1 });
})();

(function() {
    var reason1 = 'should fail be defined';
    var reason2 = 'should fail be instance of TypeError';
    var reason3 = 'should error message match'
    var callback = [1, true, 'string', null, undefined, {}].random();
    var c = new Caray;
    var _error;
    try {
        c.reduce(callback)
    } catch (error) {
        _error = error;
    }
    conditionTest1 = _error;
    console.assert(conditionTest1, { _error, reason1 });
    conditionTest2 = _error instanceof TypeError;
    console.assert(conditionTest2, { _error, reason2 });
    conditionTest3 = _error.message === callback + ' is not a function';
    console.assert(conditionTest3, { _error, reason3 });
})();