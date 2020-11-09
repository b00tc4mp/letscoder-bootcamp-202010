console.log("TEST Caray.prototype.some()");

(function() {

    console.log(" should return true when checking if some of them have the letter 'p' ")

    var c = new Caray

    c[0] = "Barcelona"
    c[1] = "Madrid"
    c[2] = "Buenos Aires"
    c[3] = "Paris"
    c[4] = "Roma"
    c.length = 5
    var iterations = 0

    var result = c.some(function(element){
        iterations++
        return element.includes('P') || element.includes('p')
    })

    console.assert(c.length === 5, 'caray length should be 5')
    console.assert(iterations === 4, 'iterations number should be 4')
    console.assert(result,"result should be true")


})();

(function() {

    console.log(" should return false when checking if some of the items are bigger than 100")

    var c = new Caray

    c[0] = Math.random()*100
    c[1] = Math.random()*100
    c[2] = Math.random()*100
    c[3] = Math.random()*100
    c[4] = Math.random()*100
    c.length = 5
    var iterations = 0

    var result = c.some(function(element){
        iterations++
        return element > 100
    })

    console.assert(c.length === 5, 'caray length should be 5')
    console.assert(result === false ,"result should be false")


})();

(function() {

    console.log(" should return true when checking if some of the items have the letter 'g'")

    var c = new Caray

    c[0] = "Carolina"
    c[1] = "Matias"
    c[2] = "Lucas"
    c[3] = "tomas"
    c[4] = "Rodrigo"
    c[5] = "Alberto"
    c.length = 5
    var iterations = 0

    var result = c.some(function(element){
        iterations++
        return element.includes("g") || element.includes("G")
    })

    console.assert(iterations === 5, 'iterations count should be 5')
    console.assert(c.length === 5, 'caray length should be 5')
    console.assert(result,"result should be true")


})();

(function() {

    console.log(" should return false when checking if some of the items are numbers")

    var c = new Caray

    c[0] = "String"
    c[1] = true
    c[2] = "Lucas"
    c[3] = undefined
    c[4] = function(){}
    c[5] = {}
    c[6] = null
    c.length = 6
    var iterations = 0

    var result = c.some(function(element){
        iterations++
        return typeof element === "number"
    })

    console.assert(iterations === 6, 'iterations count should be 6')
    console.assert(c.length === 6, 'caray length should be 6')
    console.assert(result === false,"result should be false")



})();

