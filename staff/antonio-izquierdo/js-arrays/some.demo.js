console.log('DEMO FOR SOME')

console.log('return true or false if one the item accomplish the condition')

var arr = ["Toño", "Blas", "Carlos", "Siscu"]

var result = some(arr, function(value) {
    return value.includes("i")
})

console.log(result)

var result = some(arr, function(value) {
    return value.includes("e")
})

console.log(result)
