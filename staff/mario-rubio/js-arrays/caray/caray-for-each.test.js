console.log("TEST Caray.prototype.for-each()");

(function (){

    console.log("should multiply number by 10");

    var numbers = new Caray(10,20,30,40,50);

    var result = new Caray();

    numbers.forEach(function(value){
        newValue = value+10;
        result[result.length]= newValue;
        result.length++;
        
    })


    console.assert(result.length === 5, "should the value length be 5");

    for (var i = 0; i<result.legth; i++){
        console.assert(result[i] === numbers[i] * 10, result[i] + " should equal " + numbers[i] * 10);
    }

})();

(function(){
    console.log( "should concat the position and de mierda to all the items on the Caray");

    var months = new Caray ("January", "February", "March", "April", "May", "June");

    var result = new Caray();

    months.forEach(function(value, position){

        result[result.length] = position + ": " + value + " de mierda";
        result.length++;
    })

    console.assert(result.length === 6, "should the result length 6");
    
        for (var i = 0; i<result.legth; i++){
            console.assert(result[i].includes ("de mierda"), "result should include de mierda in all the items" 
            );
    }

    for (var i = 0; i<result.legth; i++){
    console.assert(result[0].includes(i.toString()), "result position chould be the same as the position we gavethem on the string")};

})();