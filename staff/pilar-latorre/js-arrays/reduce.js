const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


var arr = [1, 2, 3, 4, 5]

function reduce(arr, expression){
    for (var i = 0; i < arr.length; i++) {
        
        if (expression(arr[i])) return true
    }
    return value = ""
}
