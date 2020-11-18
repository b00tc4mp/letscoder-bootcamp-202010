console.log("TEST Caray prototype forEach");

(function (){
    console.log("should multibly number by 10")

    var numbers = new Caray(10, 20, 30, 40, 50);
    var iterations 
    
    
    
    var result= numbers.forEach(function(value){
        iterations++;
        return value 

    })
    
    console.assert(value.length === 5, " should the value length equal to 5" )




})();