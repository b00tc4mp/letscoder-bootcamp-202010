console.log('TEST Caray.prototype.push()');

(function() {
    console.log(' should push individual values 1, "a", true, null')

    var c = new Caray()
    
    c.push(1)
    c.push('a')
    c.push(true)
    c.push(null)
    
    console.assert(c.length === 4, 'should caray length be 4')
    
    console.assert(c[0] === 1, 'should index 0 point to value 1')
    console.assert(c[1] === 'a', 'should index 1 point to value "a"')
    console.assert(c[2] === true, 'should index 2 point to value true')
    console.assert(c[3] === null, 'should index 3 point to value null')
})();

(function() {
    console.log(' should push multiple values 1, "a", true, null')

    var c = new Caray
    
    c.push(1, 'a', true, null)
    
    console.assert(c.length === 4, 'should caray length be 4')
    
    console.assert(c[0] === 1, 'should index 0 point to value 1')
    console.assert(c[1] === 'a', 'should index 1 point to value "a"')
    console.assert(c[2] === true, 'should index 2 point to value true')
    console.assert(c[3] === null, 'should index 3 point to value null')
})();

(function() {
    console.log(' should push multiple random values')

    var c = new Caray

    var v1 = Math.random()
    var v2 = ['a', 'b', 'c', 'd', 'e', 'f'].random()
    var v3 = Math.random() > .5? true : false
    var v4 = Math.random() > .5? null : undefined
    
    c.push(v1, v2, v3, v4)
    
    console.assert(c.length === 4, 'should caray length be 4')
    
    console.assert(c[0] === v1, 'should index 0 point to value 1')
    console.assert(c[1] === v2, 'should index 1 point to value "a"')
    console.assert(c[2] === v3, 'should index 2 point to value true')
    console.assert(c[3] === v4, 'should index 3 point to value null')
})();