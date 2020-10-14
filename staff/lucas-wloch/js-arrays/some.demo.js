console.log('DEMO FOR SOME')

console.log('return true or false if one the item accomplish the condition')

var arr = [21,22,23,24,25,26,27,28]

var expresion = some(arr, function(value) {
    return value > 20
})

console.log(expresion)




var expresion = some(arr, function(value) {
    return value > 30
})

console.log(expresion)