console.log  ("TEST caray.prototype.filter()");

(function () { 
    console.log ("Deberian cojer los numeros mayores que 10")
     
    var c = new Caray
    c[0]= 5
    c[1]= 10
    c[2] =15
    c[3]= 20

    c.length = 4
    var iterations = 0
    

   var result = c.filter(function(element) {
        iterations++
        if (element > 10){
            return true
        }else {
            return false
        } 
        
    });  
    
    console.log(result)
    console.assert(iterations === c.length)
})();

(function(){
    console.log ("Deberia extraer en un nuevo array con los nombres que contengan la letra r")
    var c = new Caray
    c[0]= "Maria"
    c[1]="Paco"
    c[2]= "Juan"
    c[3]= "Encarna"

    c.length = 4
    var iterations= 0

    var result = c.filter(function(element){
        iterations++
        return element.includes ("r")
    });

    console.log(result)
    console.assert(iterations === c.length)
})();


