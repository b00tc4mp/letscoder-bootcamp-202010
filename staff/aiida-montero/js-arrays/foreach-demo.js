var nums = [1,2,3,4,5,6,7,8,9,10]
var result = []
forEach(nums, function() {
    result.push(value*5)
})

console.asert(nums.length === result.length)
for(var i =0; i< nums.length; i ++)
console.asert(result[i]=== nums[i]*5 )
