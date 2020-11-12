console.log('DEMO FOR MAP')

console.log('return a new array with the elements that function returns')

var arr = [1,2,3,4]

var expresion = map(arr, function(value) {
    return value *2
})

console.log(expresion)

try {
    map(null, console.log)
} catch (error) {
    console.error(error)
}

console.log('should fail on argument 1 as array')



var expresion = map(arr, function(value) {
    return value +3
})

console.log(expresion)