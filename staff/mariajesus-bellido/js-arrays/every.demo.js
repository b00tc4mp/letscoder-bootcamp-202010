console.log('DEMO FOR EVERY'); 

console.log("Return true or false if all the items accomplish the condition"); 

var array = []; 

var expression = every(array, function(value) {

    return value > 0; 
})

console.log(expression); 


var expression = every(array, function(value) {

    return value > 3; 
})

console.log(expression); 