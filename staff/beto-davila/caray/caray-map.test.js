console.log('Test Caray.prototype.map()');

(function () {
    console.log(' should the result of each number be the cube of itself')

    var c = new Caray;
    var newArr =  new Caray;

    c[0] = Math.random();
    c[1] = Math.random();
    c[2] = Math.random();
    c[3] = Math.random();
    c[4] = Math.random();

    c.length = 5;
    var iterations = 0;

    newArr = c.map(function(element) { 
       
        iterations++;
        return element ** 3;
    }
    );

    console.assert(newArr instanceof Caray, 'should the new array be a instance of Caray');
    console.assert(newArr.length === c.length, 'should the length of the new array be the same like the original');
    for (var i = 0; i < c.length; i++) {
        console.assert(newArr[i] === c[i] ** 3, 'should each number of the new array be the cube of its respective number of the original array');
    }
    console.assert(iterations === 5, 'should the total of iterations be 5');

})();