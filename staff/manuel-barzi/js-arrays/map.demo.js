console.log('DEMO map')

var nums = [1, 2, 3, 4, 5]

console.log('multiply numbers by 10 from', nums)

var result = map(nums, function(value) { return value * 10 })

console.log(result)

console.log('convert numbers into strings from', nums)

var result = map(nums, function(value) { return value + '' })

console.log(result)

var booleans = [true, false, true, false]

console.log('convert booleans to strings and change them to upper case from', booleans)

var result = map(booleans, function(value) { return (value + '').toUpperCase() })

console.log(result)