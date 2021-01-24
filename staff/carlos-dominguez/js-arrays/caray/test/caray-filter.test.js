(function() {
    var reason1 = 'Contador deberia ser la longitud del resultado';
    var reason2 = 'Resultado son distintos arrays';
    var reason3 = 'Dberia devolver una instancia de Caray';
    var result = new Caray;
    var count = 0;
    var c = new Caray;
    c[0] = Math.floor(Math.random() * 100) + 1;
    c[1] = Math.floor(Math.random() * 100) + 1;
    c[2] = Math.floor(Math.random() * 100) + 1;
    c[3] = Math.floor(Math.random() * 100) + 1;
    c[4] = Math.floor(Math.random() * 100) + 1;
    c[5] = Math.floor(Math.random() * 100) + 1;
    c[6] = Math.floor(Math.random() * 100) + 1;
    c[7] = Math.floor(Math.random() * 100) + 1;
    c[8] = Math.floor(Math.random() * 100) + 1;
    c.length = 4;
    result = c.filter(function(element) {
        if (element >= 200) count++;
        return element >= 200;
    })
    var conditionTest1 = result.length === count;
    console.assert(conditionTest1, { result, c, reason1 });
    var conditionTest2 = result !== c;
    console.assert(conditionTest2, { result, c, reason2 });
    var conditionTest3 = result instanceof Caray;
    console.assert(conditionTest3, { result, c, reason3 });
})();

(function() {
    var reason1 = 'Error no definido';
    var reason2 = 'Error tiene que tener su tipo concreto';
    var reason3 = 'Mensaje error deberia encajar';
    var callback = [1, true, 'string', null, undefined, {}].random();
    var c = new Caray;
    var _error;
    try {
        c.filter(callback);
    } catch (error) {
        _error = error;
    }
    var conditionTest1 = _error;
    console.assert(conditionTest1, { _error, reason1 });
    var conditionTest2 = _error instanceof TypeError;
    console.assert(conditionTest2, { _error, reason2 });
    var conditionTest3 = _error.message === callback + ' is not a function';
    console.assert(conditionTest3, { _error, reason3 });
})();
