// More demos 

// We will use the find method to find Sonia among an array

console.log ("Find (demo) - Using the find method to find something with positive result")

var names = ["Juan", "Pedro", "Laura", "Ana", "Sonia"]; 

var result = names.find(findSonia);

function findSonia(item) {

    return item === "Sonia"; 

}

console.log(result);  

// returns Sonia 


// We will use the find method to find Sergio among the same array

console.log ("Find (demo) - Using the find method to find something with megative result")
var names = ["Juan", "Pedro", "Laura", "Ana", "Sonia"]; 

var result = names.find(findSergio); 

function findSergio(item) {

    return item === "Sergio"; 


}

console.log(result); 

// Returns "undefined" - Sergio is not found in this array above 


