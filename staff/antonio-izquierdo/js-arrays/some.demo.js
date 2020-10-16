console.log('DEMO FOR SOME')

console.log('return true or false if one the item accomplish the condition')

var arr = [1, 2, 3, 4, 5]

var expresion = some(arr, function(value) {
    return value > 0
})

console.log(expresion)

var expresion = some(arr, function(value) {
    return value > 6
})

console.log(expresion)