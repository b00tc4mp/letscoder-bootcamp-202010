console.log('DEMO filter')

var array = [1, 10, 20, 30, 40, 50];

console.log("find in the array the first element greater than 20", array)

var result = find (array, function(value){
    return value > 20
});

console.log(result);