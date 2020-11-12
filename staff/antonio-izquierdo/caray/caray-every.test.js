console.log('TEST Caray.prototype.every()');

(function () {
    console.log(' should return true for ["Pilar", "Aida", "Marta" and "Caterina"]. Checking if all of them contain the letter a')

    var c = new Caray
    c[0] = 'Pilar'
    c[1] = 'Aida'
    c[2] = 'Marta'
    c[3] = 'Caterina'
    c.length = 4
    
    var iterations = 0

    var result = c.every(function(name) {
        iterations++

        return name.includes('a')
    })

    console.assert(result === true, 'should return true')
    console.assert(iterations === 4, "iteration's count should be 4")
})();

(function() {
    console.log(' should return false for: ["Pilar", "Aida", "Marta" and "Caterina"]. Checking if all of them contain the letter i')

    var c = new Caray
    c[0] = 'Pilar'
    c[1] = 'Aida'
    c[2] = 'Marta'
    c[3] = 'Caterina'
    c.length = 4
    
    var iterations = 0

    var result = c.every(function(name) {
        iterations++

        return name.includes('i')
    })

    console.assert(result === false, 'should return false')
    console.assert(iterations === 3, "iteration's count should be 3")
})();

(function () {
    console.log(' should return true for [1, 2, 3, 4, 5]. Checking if all of them are higher than 0')

    var c = new Caray
    c[0] = 1
    c[1] = 2
    c[2] = 3
    c[3] = 4
    c[4] = 5
    c.length = 5

    var iterations = 0

    var result = c.every(function(value) {
        iterations++

        return value > 0
    })

    console.assert(result === true, 'should return true')
    console.assert(iterations === 5, "iteration's count should be 5")
})();

(function(){
    console.log(' should return false for [1, 2, 3, 4, 5]. Checking if all of them are lower than 5')

    var c = new Caray
    c[0] = 1
    c[1] = 2
    c[2] = 3
    c[3] = 4
    c[4] = 5
    c.length = 5

    var iterations = 0

    var result = c.every(function (value) {
        iterations++

        return value < 5
    })

    console.assert(result === false, 'should return false')
    console.assert(iterations === 5, "iteration's count should be 5")
})();


