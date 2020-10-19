console.log( "TEST. Prototype. Filter ");

(function() {

    console.log( " Should filter number > 18 ")

var c = new Caray
c[0] = {Name: "Lucas", age: 19}
c[1] = {Name: "Marcos", age: 17}
c[2] = {Name: "Maria", age: 32}
c[3] = {Name: "Irene", age: 18}
c[4]= {Name: "Antonia", age: 60}
c.length = 5

var iterations = 0

var result = c.filter(function(element, index, arrayCompleto) {
    iterations ++
    return element.age > 18
})
console.log(result)
console.assert(iterations === 5, "number iteration number should be 5")
console.assert(result[0]===c[0], "should return index 0 equal c index 0")
console.assert(result[1]===c[2], "should return index 1 equal c index 2")
console.assert(result[2]===c[4], "should return index 2 equal c index 4")


})();

/////
