console.log ("TEST caray.prototype.foreach");

(function(){
 var c = new Caray
 c[0]= 10
 c[1]= 15
 c[2]= 20 

 c.length = 3
 var iterations = 0

 c.forEach(function(element,index,carayTotal){
    console.log(element *2)
     iterations++
     console.assert(element*2 === carayTotal[index]*2) 
     
 })

 console.assert(iterations === 3)
 

})()

