console.log('TEST Caray.prototype.some()');

(function () {
    console.log(' should return "true" for: ["Toño", "Blas", "Carlos" and "Siscu"]. Checking if at least one string contains the letter "i"')
    
    var c = new Caray
    c[0] = "Toño"
    c[1] = "Blas"
    c[2] = "Carlos"
    c[3] = "Siscu"
    c.length = 4
    
    var iterations = 0

    var result = c.some(function(value) {
        iterations ++

        return value.includes("i")
    })

    console.assert(result === true, 'should return true')
    console.assert(iterations === 4, "iteration's count should be 4")
})();

(function() {
    console.log(' should return "false" for: ["Toño", "Blas", "Carlos" and "Siscu"]. Checking if at least one string contains the letter "e"')

    var c = new Caray
    c[0] = "Toño"
    c[1] = "Blas"
    c[2] = "Carlos"
    c[3] = "Siscu"
    c.length = 4
    
    var iterations = 0

    result = c.some(function(value) {
        iterations ++

        return value.includes("e")
    })
    console.assert(result === false, 'should return false')
    console.assert(iterations === 4, "iteration's count should be 4")
})();

(function() { 

    console.log(' should return "true" for: [1, 2, 3, 4, 5]. Checking if at least one number is lower than 2')
    var c = new Caray
    c[0] = 1
    c[1] = 2
    c[2] = 3
    c[3] = 4
    c[4] = 5
    c.length = 5

    var iterations = 0

    result = c.some(function(value) {
        iterations ++

        return value > 0
    })  

    console.assert(result === true, 'should return true')
    console.assert(iterations === 1, "iteration's count should be 1")
})();



(function() {
    console.log(' should return "false" for: [1, 2, 3, 4, 5]. Checking if at least one number is higher than 6')

    var c = new Caray
    c[0] = 1
    c[1] = 2
    c[2] = 3
    c[3] = 4
    c[4] = 5
    c.length = 5

    var iterations = 0

    result = c.some(function(value) {
        iterations ++

        return value > 6
    })

    console.assert(result === false, 'should return false')
    console.assert(iterations === 5, "iteration's count should be 5")
})();

(function() {
    console.log(' should return "false" for falsy values (false, 0, "", null, undefined, )')

    var c = new Caray
    c[0] = 1
    c[1] = 2
    c[2] = 3
    c.length = 3

    var iterations = 0

    result = c.some(function(value) {
        iterations ++

        return value === 0
    })
    //console.assert(result === false, 'should return false')
    //console.assert(iterations === 5, "iteration's count should be 5")
})();



