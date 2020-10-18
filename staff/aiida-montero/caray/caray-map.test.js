console.log ("TEST caray.prototype.map()");
(function(){
  var c = new Caray
  c[0]= 10
  c[1]= 20
  c[2]= 30
  c[3]= 40
  c[4]= 50

  c.length = 5
  var iterations = 0 

  var result = c.map(function(element){
      iterations++
      return (element *2)
    
  })
    console.log(result)
  for (var i = 0; i <result.length; i++) { 

    console.assert (result[i] === c[i]) 
    console.assert(iterations === c.length)
    };



})()


