console.log = ("TEST Caray FindIndex");


(function(){

    var numbers = new Caray(25, 50, 75, 100, 125);


    var iterations = 0;
    
    var result = numbers.findIndex(function(value){
        iterations++;

        return value > 50


    })

    console.assert(result === 75, "should the result be 75");



})();