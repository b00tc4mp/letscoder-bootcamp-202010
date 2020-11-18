console.log('TEST Caray.prototype.map()');

(function () {
    console.log(' should map numbers multiplied by 10')

    var c = new Caray

    c[0] = Math.random()
    c[1] = Math.random()
    c[2] = Math.random()
    c[3] = Math.random()
    c[4] = Math.random()

    c.length = 5

    var iterations = 0

    var result = c.map(function (item) {
        iterations++

        return item * 10
    })

    console.assert(result instanceof Caray, 'should result be instance of Caray')
    console.assert(result.length === 5, 'should result length match the original Caray')

    console.assert(iterations === 5)

    /*
    console.assert(result[0] === c[0] * 10)
    console.assert(result[1] === c[1] * 10)
    console.assert(result[2] === c[2] * 10)
    console.assert(result[3] === c[3] * 10)
    console.assert(result[4] === c[4] * 10)
    */
    for (var i = 0; i < c.length; i++)
        console.assert(result[i] === c[i] * 10)
})(); 