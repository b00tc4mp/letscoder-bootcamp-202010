console.log( "TEST Caray.prototype.some ()");

(function() {

    console.log( " should return true when checking if some of them have letter 'i'")
    
    var c =  new Caray()
   
    c[0] = "Barcelona"
    c[1] = "Madrid"
    c[2] = "Buenos Aires"
    c[3] = "Paris"
    c[4] = "Roma"
    c.length = 4
    
    var iterations = 0
    var result = c.some(function(name){
        iterations ++
        return name.includes('i')
    })

    console.assert( result === true, "result should be true ")
    console.assert( itarations === 4)

})





