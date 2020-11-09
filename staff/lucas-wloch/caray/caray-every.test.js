console.log("TEST Caray.prototype.every()");

(function() {
    console.log(" should return true for pilar, aida, marta and caterina, checking they contain the letter a")

    var c = new Caray
    c[0] = "pilar"
    c[1] = "aida"
    c[2] = "marta"
    c[3] = "caterina"
    c.length = 4

    var iterations = 0
    var result = c.every(function (name) {
        iterations++
        
        return name.includes("a")
    })

    console.assert(result === true, "result should be true")
    console.assert(iterations === 4, "iterations count should be 4")


})();

(function(){
    console.log(" should return false for pital, aide, marta and caterina, checking they contain the letter i")

    var c = new Caray
    c[0] = "pilar"
    c[1] = "aida"
    c[2] = "marta"
    c[3] = "caterina"
    c.length = 4
    
    var iterations = 0

    var result = c.every(function (name){
        iterations++

        return name.includes("i")
    })

    console.assert(result === false, "result should be false")
    console.assert(iterations === 3, "iterations count should be 3")
})();