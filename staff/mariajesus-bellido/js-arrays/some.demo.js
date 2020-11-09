console.log("This is a demo for some"); 

console.log("return true of false if one of the item(s) accomplishes the condition"); 

var array = ["Sandra", "Milagros", "Juan Carlos", "David"]; 

var result = some(array, function(value) {
    return value.includes("i"); 
})


console.log(result); 

var result = some(array, function(value) {
    return value.includes("a"); 
})


console.log(result); 