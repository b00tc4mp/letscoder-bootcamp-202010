console.log('DEMO FOR SOME')

console.log('return true or false, there is any number on the array that is higger than 3' , arr)

var arr = [1, 2, 3, 4, 5]

var expresion = some(arr, function(value) {
    return value > 3
})

console.log(expresion)

console.log('return true or false, there is any number on the array that is higger than 6' , arr)


var expresion = some(arr, function(value) {
    return value > 6
})

console.log(expresion)