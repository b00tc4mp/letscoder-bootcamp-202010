console.log('DEMO filter')

var nums = [1, 2, 3, 4, 5]

console.log('filter each item that is a multiple of 2 from array', nums)

var result = filter(nums, function(value) {
    return value % 2 === 0
})

console.log(result)

console.log('filter each item that is bigger that 3 from array', nums)

var result = filter(nums, function(value) { return value > 3 })

console.log(result)