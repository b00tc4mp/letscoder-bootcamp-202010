console.log('MAP test')

var nums = [3, 4, 6, 8, 10]





var result = map (nums, function (value){
     var remainder = value % 3
     if (remainder === 0) console.log(value)
})
console.assert(result.length === 2)
console.assert(result[0] === 3 )
console.assert(result[1] === 6)


console.assert(result.length === nums.length)


result = map(nums, function(value){
     return value * 10
})

console.log(result)

for (var i = 0; i < nums.length; i++)
    console.assert(result[i] === nums[i])

console.assert(result.length === )


