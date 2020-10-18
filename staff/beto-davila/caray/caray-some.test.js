console.log('Test Caray.prototype.some()');

(function() {
    console.log(' should the returned value be true being satisfied the condition. There should be a "star" string in SOME elements.');
    
    var c = new Caray();
    c.length = 6;
    var iterations = 0;

    c[0] = 'intouchables';
    c[1] = 'star Wars';
    c[2] = 'adu';
    c[3] = 'star Trek';
    c[4] = 'el hoyo';
    c[5] = 'amelie';

    var result = c.some(function(element) {
        iterations++;
        if (element.includes('star')) return true;
        return false;
    });

    console.assert(result === true, 'should the result be true');
    console.assert(iterations === 2, 'should the number of iterations be 2');
})();

(function() {
    console.log(' should the returned value be false not satisfiyng the condition. Not even numbers among the passed elements from the array.');
    
    var c = new Caray();
    c.length = 4;
    var iterations = 0;

    c[0] = 5;
    c[1] = 13;
    c[2] = 17;
    c[3] = 9;

    var result = c.some(function(element) {
        iterations++;
        if (element % 2 === 0) return true;
        return false;
    });
    console.assert(result === false, 'should the result be false');
    console.assert(iterations === 4, 'should the number of iterations be 4');
})();

(function () {
    console.log(' should fail when it receives a non callback function as argument');

    var c = new Caray();

    var fail;

    try {
        c.some();
    } catch (error) {
        fail = error;
    }
    console.assert(fail, 'should fail be defined.');
    console.assert(fail.message === 'undefined is not a function', 'error message should match');
    console.assert(fail instanceof TypeError, 'should error be an instance of TypeError.')
})();
