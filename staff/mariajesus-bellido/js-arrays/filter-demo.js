console.log("Demo - Filter"); 


//We hava group of people with ages as per the constant bellow.  We need to figure out who is allowed to drink alcohol 
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// With filter()

// We need a function to filter out people who is 18 years old and over. 


var allowedDrink = ages.filter(function(age) {
if(age >= 18) {
return true;
  }
});

console.log(allowedDrink); 