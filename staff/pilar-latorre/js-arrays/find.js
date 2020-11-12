console.log('DEMO METHOD FIND')

var nums = [5, 12, 8, 130, 44];
console.log('Show the first number on the array that is bigger than 100, ', nums)


function find(array, callback) {
    for(var i = 0; i<array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        } 
    }
return undefined;
}


find(nums, function(element){
return element > 100
})
