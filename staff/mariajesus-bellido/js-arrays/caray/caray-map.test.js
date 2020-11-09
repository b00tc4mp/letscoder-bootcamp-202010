console.log(' TEST Caray.prototype.map'); 

(function (){
    console.log ("should map numbers multiplied by 100"); 

    var newNumbers = new Caray;
    
    newNumbers[0] = Math.random(); 
    newNumbers[1] = Math.random(); 
    newNumbers[2] = Math.random(); 
    newNumbers[3] = Math.random(); 
    newNumbers[4] = Math.random(); 

    newNumbers.length = 5; 

    var iteration = 0; 

    var result = newNumbers.map(function (item){
        iterations++

        return item * 100

    })

    console.assert(result instanceof Caray, "should result be instance of Caray"); 
    console.assert(result.length === 5, "should result length match the original Caray"); 
    console.assert(iterations === 5); 


    for (var i = 0; i < newNumbers.length; i++); 
        console.assert(result[i] === newNumbers[i] * 100); 



})(); 

(function() {
    console.log( ' should fail on non-function call-back'); 

    var juanito = new Caray (undefined, 1, false, null);

    var fail; 

    try {
        juanito.map(33); 
    } catch (error) {
        fail = error; 
    }
console.assert(fail instanceof TypeError, "should be a TypeError"); 
console.assert(fail.message === "33 is not a function", "the error message is not correct"); 

})(); 