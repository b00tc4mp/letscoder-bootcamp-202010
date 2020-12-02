(function() {
    var reason1 = 'should result be true';
    var reason2 = 'should iterations count be 4';
    var c = new Caray;
    c[0] = 'pilar';
    c[1] = 'aida';
    c[2] = 'marta';
    c[3] = 'caterina';
    c.length = 4;
    var iterations = 0;
    var result = c.every(function(name) {
        iterations++
        return name.includes('a')
    })
    conditionTest1 = result === true;
    console.assert(conditionTest1, { result, reason1 });
    conditionTest2 = iterations === 4;
    console.assert(conditionTest2, { iterations, reason2 });
})();

(function() {
    var reason1 = 'should result be false';
    var reason2 = 'should iterations count be 3';
    var c = new Caray;
    c[0] = 'pilar';
    c[1] = 'aida';
    c[2] = 'marta';
    c[3] = 'caterina';
    c.length = 4;
    var iterations = 0;
    var result = c.every(function(name) {
        iterations++;
        return name.includes('i');
    })
    conditionTest1 = result === false;
    console.assert(conditionTest1, { result, reason1 });
    conditionTest2 = iterations === 3;
    console.assert(conditionTest2, { iterations, reason2 });
})();

(function() {
    var reason1 = 'should fail be defined';
    var reason2 = 'should fail be instance of TypeError';
    var callback = [1, true, 'string', null, undefined, {}].random();
    var c = new Caray;
    var _error;
    try {
        c.every(callback)
    } catch (error) {
        _error = error
    }
    conditionTest1 = _error;
    console.assert(conditionTest1, { _error, reason1 });
    conditionTest2 = _error instanceof TypeError;
    console.assert(conditionTest2, { _error, reason2 });
})();
