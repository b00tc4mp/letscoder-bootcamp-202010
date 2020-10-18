var nums = [1, 2, 3, 4, 5];

console.log('From this array, filter each item that happens to be a multiple of 2', nums); 

var result = filter(nums, function(value) {

  return value % 2 === 0; 
}); 


console.log(result); 



console.log('From this array, filter each item that is bigger than 4 from this array', nums); 

var result = filter(nums, function(value) {

  return value > 4; 

});

console.log(result); 


console.log("----- Separador ----- otros ejemplos ----"); 


console.log("Demo - Filter"); 


//We have a group of people with ages as per the constant bellow.  We need to figure out who is allowed to drink alcohol 
varages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// With filter()

// We need a function to filter out people who is 18 years old and over. 


var allowedDrink = ages.filter(function(age) {
if(age >= 18) {
return true;
  }
});

console.log(allowedDrink); 