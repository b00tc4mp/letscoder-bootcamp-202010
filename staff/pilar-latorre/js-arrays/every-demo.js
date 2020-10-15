console.log('DEMO FOR EVERY')

var arr = [1,2,3,4]

console.log('return true or false, all the numbers on the array are is higger than 0' , arr)

var result = every(arr, function(value) {
    return value > 0
})

console.log(result)





console.log('return true or false, all the numbers on the array are is higger than 3' , arr)

var result = every(arr, function(value) {
    return value > 3
})

console.log(result)

console.log('should fail on argument null as array')

try {
    forEach(null, console.log)
} catch (error) {
    console.error(error)
}

console.log('should fail on argument 1 as array')

try {
    forEach(1, console.log)
} catch (error) {
    console.error(error)
}

console.log('should fail on argument true as array')

try {
    forEach(true, console.log)
} catch (error) {
    console.error(error)
}

console.log('should fail on argument undefined as a function')

try {
    forEach([1, 2, 3])
} catch (error) {
    console.error(error)
}

