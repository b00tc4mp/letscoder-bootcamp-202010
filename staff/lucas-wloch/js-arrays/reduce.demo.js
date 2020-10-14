console.log('DEMO REDUCE')

// var arr = [1, 2, 3, 4, 5]

// console.log('calculate the function given on the return', arr)

// var total = reduce(arr, function(a,b){
//     return a+b
//     })

// console.log(total)


// var arr = [1, 2, 3, 4, 5]

// var total = reduce(arr, function(a,b){
//     return a-b
//     },50)

// console.log(total)
var arr = [3, 4, 5, 6, 7]

var total = reduce(arr, function(a,b){
    return a+ 2*b
    },-68)

console.log(total)

console.log("should fail on undefined argument as array")
try {
    var hola = reduce(undefined, function(a,b){return a + b})
    console.log(hola)
} catch (error) {
    console.log(error)
}
console.log("should fail on undefined argument as function")
try {
    var hola = reduce(arr)
    console.log(hola)
} catch (error) {
    console.log(error)
}
