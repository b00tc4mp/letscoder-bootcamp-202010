console.log('Test Caray.prototype.pop()');

(function() {
    
    console.log(' should remove the last element of the array');

    var c = new Caray();

    for(var i = 0; i < 5; i++){
        c[i] = Math.random();
        c.length++;
    }

    var removed = c.pop();

    console.assert(removed === c[c.length], 'should the removed item be the last one in the array. On this instance a random number.')
    console.assert(c.length === 4, 'should the new length of the array be 4 after removing the last item.')  
})();


(function() {
    console.log(' should be undefined since there are no elements in the array.');

    var c = new Caray();
    c.length = 0;

    var value = c.pop();

    console.assert(value === undefined, 'should return be undefined') 
})();