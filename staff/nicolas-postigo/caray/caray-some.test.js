(function () {
    var tiempo = new Caray
    tiempo[0]="lluvia"
    tiempo[1]="sol"
    tiempo[2]="viento"
    tiempo.length = 3

    var iterations = 0

    var result = tiempo.some(function (name) {
        iterations++

        return name.includes('o')
})

console.assert(result === true, 'should result be true')
console.assert(iterations === 3, 'should iterations count be 3')

})();











