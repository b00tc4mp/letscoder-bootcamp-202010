console.log('TEST Caray.prototype.forEach()');
//TODO Corregir este forEach. Está mal hecho
(function() {
    console.log(' should show each item of the array "[1, 2, 3, 4, 5]" in the console multiplied by 10');

    var c = new Caray;
    c[0] = 1;
    c[1] = 2;
    c[2] = 3;
    c[3] = 4;
    c[4] = 5;
    c.length = 5;
    
    var iterations = 0;

    var result = c.forEach(function() {
        console.log(c[iterations] * 10)
        iterations ++
    })
    console.assert(result === console.log(c[iterations]), 'should return a "console.log" of each item')
    console.assert(iterations === 5, "iteration's count should be 3")
})();