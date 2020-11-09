console.log('TEST Caray.prototype.some()'); 

(function () {

    console.log(' should find if there are any words that includes the letter e'); 

    var computers = new Caray; 

    computers[0] = "printer"; 
    computers[1] = "mouse"; 
    computers[2] = "monitor"; 
    computers.length = 3; 

    var iterations = 0; 

    var result = computers.some(function (name) {
        iterations++ 
    
        return name.includes('e'); 
    }) 

console.assert(result === true, "should result be true"); 
console.assert(iterations === 2, "should iterations count be 2 "); 
console.assert(computers.length === 3, "should computers.length be 3 "); 

})(); 

(function(){

console.log( ' should throw an error if callback is not a function'); 
    var computers = new Caray ("printer", "mouse", "monitor"); 

    var fail; 

    try {
        computers.some("juanito"); 
    } catch (error) {
        fail = error; 
    }

console.assert(fail instanceof TypeError, "should be TypeError"); 
console.assert(fail.message === "juanito is not a function", "the error message is not correct"); 
})(); 