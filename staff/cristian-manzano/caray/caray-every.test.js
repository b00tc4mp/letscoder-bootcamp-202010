console.log('TEST Caray.prototype.every()');

(function () {
    console.log(' should return true for pilar, aida, marta and caterina, checking they contain the letter a')

    var c = new Caray
    c[0] = 'pilar'
    c[1] = 'aida'
    c[2] = 'marta'
    c[3] = 'caterina'
    c.length = 4

    var iterations = 0

    var result = c.every(function (name) {
        iterations++

        return name.includes('a')
    })

    console.assert(result === true, 'should result be true')
    console.assert(iterations === 4, 'should iterations count be 4')
})();

(function () {
    console.log(' should return false for pilar, aida, marta and caterina, checking they contain the letter i')

    var c = new Caray
    c[0] = 'pilar'
    c[1] = 'aida'
    c[2] = 'marta'
    c[3] = 'caterina'
    c.length = 4

    var iterations = 0

    var result = c.every(function (name) {
        iterations++

        return name.includes('i')
    })

    console.assert(result === false, 'should result be false')
    console.assert(iterations === 3, 'should iterations count be 3')
})();

(function () {
    console.log(' should fail on non-function callback')

    var callback = [1, true, 'string', null, undefined, {}].random()

    var c = new Caray

    var fail

    try {
        c.every(callback)
    } catch(error) {
        fail = error
    }

    console.assert(fail, 'should fail be defined')
    console.assert(fail instanceof TypeError, 'should fail be instance of TypeError')
})();

