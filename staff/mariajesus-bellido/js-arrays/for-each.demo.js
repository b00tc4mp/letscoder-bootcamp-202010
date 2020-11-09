console.log ("Demo forEach"); 


var nums = [1, 2, 3, 4, 5, 6]; 

console.log("calculate the remainder of 2 for each item from the array", nums); 

var result = []; 

forEach(nums, function (value)   {

    var remainder = value % 2; 

    if (remainder === 0) result.push(value); 

}); 


console.log(result); 


console.log("show each item in the console from array", nums); 

forEach (nums, console.log); 

console.log("multiply each item by 10 and sent it from the array to the console", nums ); 


forEach(nums, function (value) {

    console.log(value * 10); 
}); 

console.log("Should fail on argument null as array"); 

try {

    forEach(null, console.log); 

} catch (error) {

    console.error(error); 
}

console.log("should fail on argument 1 as array"); 

try {

    forEach(1, console.log); 

} catch (error) {

    console.error(error);
}


console.log( "Should fail on argument true as array"); 

try {

    forEach(true, console.log)
} catch (error) {

    console.error(error); 
}

console.log("should fail on argument undefined as a function"); 


try {
    forEach([1, 2, 3, 4])

} catch (error) {
    console.error(error); 
}