(function() {
    var reason1 = 'Deberia devolver un Caray';
    var reason2 = 'Input y Output deberian tener la misma longitud Caray';
    var reason3 = 'Deberian ser 5 iteraciones';
    var reason4 = 'Deberian ser multiplicados por 10';
    var c = new Caray;
    c[0] = Math.random();
    c[1] = Math.random();
    c[2] = Math.random();
    c[3] = Math.random();
    c[4] = Math.random();
    c.length = 5;
    var iterations = 0;
    var result = c.map(function(item) {
        iterations++;
        return item * 10;
    })
    conditionTest1 = result instanceof Caray;
    console.assert(conditionTest1, { result, reason1 });
    conditionTest2 = result.length === 5;
    console.assert(conditionTest2, { result, reason2 });
    conditionTest3 = iterations === 5;
    console.assert(conditionTest3, { result, reason3 });
    for (var i = 0; i < c.length; i++) {
        if (result[i] !== c[i] * 10) {
            conditionTest4 = false;
            break;
        }
        conditionTest4 = true;
    }
    console.assert(conditionTest4, { result, c, reason4 });
})();
