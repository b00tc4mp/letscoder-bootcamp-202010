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


(function(){

    var c = new Caray(25, 50, 75, 100, 125)

    c[0] = Math.random()
    c[1] = Math.random()
    c[2] = Math.random()
    c[3] = Math.random()
    c[4] = Math.random()

    c.length = 5;

    var iterations = 0;

    var result = c.findIndex(function(value){
        iterations++;

        return value > 0,5
    });

})();