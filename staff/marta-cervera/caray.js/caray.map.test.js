console.log( "TEST. Prototype. Map ");

(function(){

console.log( " map should be mutiplied by 5")

var c = new Caray

c[0]= Math.random()
c[1]= Math.random()
c[2]=Math.random()
c[3]= Math.random()
c[4]= Math.random()

c.length = 5

var iterations = 0
var result = c.map(function(value) {
    iterations++
    return value * 5
})
 console.assert(result instanceof Caray , " should result the instance of Caray")
 console.assert(c.length===5)
 console.assert(c)




})()