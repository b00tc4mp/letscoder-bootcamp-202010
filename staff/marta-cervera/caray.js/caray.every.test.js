console.log ('TEST Caray.prototype.every()');

(function() {
 console.log ( " should return the names pilar, aida, caterina, marta")
    var c = new Caray
    
    c[0] = "pilar"
    c[1] = "aida"
    c[2] = "marta"
    c[3] = "caterina"
    c.length = 4
    
    var iterations = 0
    
    var result = c.every(function(name){
    iterations ++
    
    return name.includes('a')
    })
    
    console.assert(result === true, " result should be true")
    console.assert( iterations=== 4, "iterations count should be 4")
    })();
////////

    (function() {
     console.log( " should return the names that inlcudes letter 'i' ");
     
        var c = new Caray

        c[0] = "pilar"
        c[1] = "aida"
        c[2] = "marta"
        c[3] = "caterina"
        c.length = 4
        var iterations = 0

        var result = c.every(function(name){
        iterations++

        return name.includes('i')
    })
        console.assert(result === false, " should be false")
        console.assert( iterations=== 3, " should be 3 iterations")
    
})();