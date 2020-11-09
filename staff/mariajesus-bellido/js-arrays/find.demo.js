console.log("DEMO find")

var array = [1,2,3,4,5,6]

console.log("Returns the value of an array that matches with 5", array)

var result = find (array, function (value) {

return value === 5
})

console.log(result)




console.log("------------ Separador ----------------"); 



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


