console.log('TEST forEach')

console.log('multiply each item by 10 from')

var nums = [1, 2, 3, 4, 5]

var result = []

forEach(nums, function (value) {
    result.push(value * 10)
})

console.assert(result.length === nums.length)

for (var i = 0; i < result.length; i++)
    console.assert(result[i] === nums[i] * 10)

console.log('calculate the remainer by 2 of each item from')
    
var nums = [1, 2, 3, 4, 5, 6]

var result = []

forEach(nums, function (value) {
    var remainder = value % 2

    if (remainder === 0) result.push(value)
})

console.assert(result.length === 3)
console.assert(result[0] === 2)
console.assert(result[1] === 4)
console.assert(result[2] === 6)

console.log('should fail on argument null as array')

var fail

try {
    forEach(null, function() {})
} catch (error) {
    fail = error
}

console.assert(fail !== undefined, 'error should be defined')
console.assert(fail.message === 'null is not an array', 'error message should match')

console.log('should fail on argument 1 as array')

var fail

try {
    forEach(1, function() {})
} catch (error) {
    fail = error
}

console.assert(fail !== undefined, 'error should be defined')
console.assert(fail.message === '1 is not an array', 'error message should match')