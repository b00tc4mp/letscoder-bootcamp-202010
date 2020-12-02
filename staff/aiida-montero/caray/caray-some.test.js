console.log ("TEST caray.prtotype.some");
(function(){
    var c = new Caray
    c[0]= 10
    c[1]= 15
    c[2]= 7
    c[3]= 2
  
    c.length = 4
    iterations = 0 
var result = c.some(function(element){
    iterations++
    return (element > 5)
})
console.log(result)
console.assert(iterations === 1,"deberia hacer solo una iteracion")
console.assert(result === true, "deveria devolver true" )

})()