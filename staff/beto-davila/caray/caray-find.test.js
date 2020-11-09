console.log('Test Caray.prototype.find()');

(function () {
    console.log(' It will be returned the first element that satisfies the condition > 0.5.');
    
    var c = new Caray();
    var iterations = 0;
    c.length = 4;

    c[0] = 0.2;
    c[1] = 0.4;
    c[2] = 0.6;
    c[3] = 0.8;

    var result = c.find(function(number) {
        iterations++;
        if(number > 0.5) {
            return number;
        } else {
            return undefined;
        }
    });

    console.assert(result === 0.6, 'should the first element that satisfies the condition be 0.6')
    console.assert(iterations === 3, 'should the number of iterations be 3')
})();

(function () {
    console.log(' It will be returned undefined not satisfying the condition.');
    
    var c = new Caray();
    var iterations = 0;
    c.length = 4;

    c[0] = 0.2;
    c[1] = 0.4;
    c[2] = 0.1;
    c[3] = 0.3;

    var result = c.find(function(number) {
        iterations++;
        if(number > 0.5) {
            return number;
        } else {
            return undefined;
        }
    });

    console.assert(result === undefined, 'should the return be undefined')
    console.assert(iterations === 4, 'should the number of iterations be 4')
})();