console.log('DEMO REDUCE')

var arr = [1, 2, 3, 4, 5]

console.log('add the numbers that given on the array', arr)

var total = reduce(arr, function(a,b){
    return a+b
    })

console.log(total)


var arr = [1, 2, 3, 4, 5]

console.log('substract from 50 the number given on the array', arr)

var total = reduce(arr, function(a,b){
    return a-b
    },50)

console.log(total)

console.log('should fail on argument null as array')

try {
    reduce(null, console.log)
} catch (error) {
    console.error(error)
}

console.log('should fail on argument 1 as array')

try {
    reduce(1, console.log)
} catch (error) {
    console.error(error)
}

console.log('should fail on argument true as array')

try {
    reduce(true, console.log)
} catch (error) {
    console.error(error)
}

console.log('should fail on argument undefined as a function')

try {
    reduce([1, 2, 3])
} catch (error) {
    console.error(error)
}