console.log('TEST Caray.prototype.filter()');

(function() {
    console.log(' should return numbers higher than 2 from the array [1, 2, 3, 4, 5, 6]');

    var c = new Caray;
    c[0] = 1;
    c[1] = 2;
    c[2] = 3;
    c[3] = 4;
    c[4] = 5;
    c[5] = 6;
    c.length = 6;

    var iterations = 0;

    var result = c.filter(function(value) {
        iterations ++
        return value > 2
    })

    for (var i = 0; i <result.length; i++) {
    
    console.assert (result[i] > 2, "should return [3, 4, 5, 6]")
    console.assert (iterations === 6, "iteration's number should be 6");
    };
})();

(function() {
    console.log(' should return items that includes letter "a" from the array ["Marta", "Lucas", "Toño", "Pilar", "Siscu"]');

    var c = new Caray;
    c[0] = "Marta";
    c[1] = "Lucas";
    c[2] = "Toño";
    c[3] = "Pilar";
    c[4] = "Siscu";
    c.length = 5;

    var iterations = 0;

    var result = c.filter(function(name) {
        iterations ++
        return name.includes('a')
    });
    for (var i = 0; i <result.length; i++) { 
    console.assert (result[i].includes('a'), "should return 'Marta', 'Lucas', 'Pilar'");
    console.assert (iterations === 5, "iteration's number should be 5");
    };
})();

(function() {
    console.log(' should filter "false" values from the array [true, true, true, false, true, false]');

    var c = new Caray;
    c[0] = true;
    c[1] = true;
    c[2] = true;
    c[3] = false;
    c[4] = true;
    c[5] = false;

    c.length = 6;

    var iterations = 0;

    var result = c.filter(function(value) {
        iterations ++;
        return value === false;
    });

    for (var i = 0; i <result.length; i++) { 
    console.assert (result[i] === false, "should return false");
    console.assert (iterations === 6, "iteration's count should be 6");
    };
})();