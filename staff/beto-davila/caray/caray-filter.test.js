console.log('Test Caray.prototype.filter()');

(function () {
    console.log(' should return a new array with the names whose length is bigger than 7. "margarita" and "federico" on this instance.');

    var c = new Caray;
    var newArr = new Caray;
    c[0] = 'pilar';
    c[1] = 'beto';
    c[2] = 'margarita';
    c[3] = 'federico'
    c.length = 4;
    var iterations = 0;
    
    newArr = c.filter(function (name) {
        iterations++;
        if (name.length > 7) {
            newArr[newArr.length] = name;
        } else {
            return false;
        }
        return newArr;
    });
    console.assert(newArr[0] === 'margarita', 'should index 0 of new array be "margarita"');
    console.assert(newArr[1] === 'federico', 'should index 1 of new array be "federico"');
    console.assert(c.length === 4, 'should caray length be 4');
    console.assert(newArr.length === 2, 'should new array length be 2');
    console.assert(iterations === 4, 'should number of iterations be 4');

})();

(function () {
    console.log(' should return an empty array since the given condition "name.length < 4" does not meet the criteria according to the values.');

    var c = new Caray;
    var newArr = new Caray;
    c[0] = 'pilar';
    c[1] = 'beto';
    c[2] = 'margarita';
    c[3] = 'federico'
    c.length = 4;
    
    newArr = c.filter(function (name) {
        
        if (name.length < 4) {
            newArr[newArr.length] = name; 
        } else {
            return false;
        }
        return newArr;
    });
    console.assert(c.length === 4, 'should caray length be 4');
    console.assert(newArr.length === 0, 'should newArr length be 0');
})();