console.log(' Demo for REDUCE '); 

var nums = [1, 2, 3, 4, 5]; 

console.log('it will add all numbers from ', nums); 

var result = reduce(nums, function(accum, element) {

    return accum + element
})

console.log(result); 


console.log("----------  Separador -----------"); 


var cart = [
    {name: "levis", price: 60}, 
    {name: "jacket", price: 100}, 
    {name: "cool socks", price: 15}
]

console.log("It calculates the total price from the cart", cart);

var result = reduce(cart, function (accum, product) {

    return accum + product.price
}, 0); 

console.log(result); 






















console.log("REDUCE (w/for) - Guessing out how old they are all together")

var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//Queremos averiguar la edad total del grupo -array-

//Con el for



ageSum = 0; 

for (var i = 0; i < ages.length; i++)
{ageSum += ages[i]}; 

console.log(ageSum); 

