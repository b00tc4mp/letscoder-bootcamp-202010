(function() {
    var reason1 = 'Resultado deberia ser 100';
    var conditionTest1 = false;
    var result = 0;
    var c = new Caray;
    c[0] = 10;
    c[1] = 20;
    c[2] = 30;
    c[3] = 40;
    c.length = 4;
    c.forEach(function(element) {
        result += element;
    })
    conditionTest1 = result === (c[0] + c[1] + c[2] + c[3]);
    console.assert(conditionTest1, { result, c, reason1 });
})();

(function() {
    var reason1 = 'Error no definido';
    var reason2 = 'Error tiene que tener su tipo concreto';
    var reason3 = 'Mensaje error deberia encajar';
    var callback = [1, true, 'string', null, undefined, {}].random();
    var c = new Caray;
    var _error;
    try {
        c.forEach(callback)
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