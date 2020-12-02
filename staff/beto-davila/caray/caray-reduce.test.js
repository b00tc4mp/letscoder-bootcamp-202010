console.log('Test Array.prototype.reduce()');

(function() {
    console.log(' should all the items in the array be joined to form a string of characters converted to lower case.');
    
    var c = new Caray();
    c.length = 9;

    c[0] = 'O';
    c[1] = 'L';
    c[2] = 'A';
    c[3] = ' ';
    c[4] = 'M';
    c[5] = 'U';
    c[6] = 'N';
    c[7] = 'D';
    c[8] = 'O';

    var result = c.reduce(function(salute, char) { 
        salute = salute + char.toLowerCase();
        return salute;

    }, 'H');
    console.assert(result === 'Hola mundo', 'should the result be "Hola mundo"');
    console.assert(result.length === c.length + 1, 'should the length of the result be the length of the original array plus the passed character.')

})();

// ... TO BE CONINUED ....