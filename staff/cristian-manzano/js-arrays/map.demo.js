console.log('DEMO map')

var nums = [3, 4, 6, 8, 10]

console.log('calculate reminder', nums)

var result = map;
map (nums, function (value){
     var remainder = value % 3
     if (remainder === 0) console.log(value)
})

console.log('return each item from array multiplied by 10', nums)

result = map(nums, function(value){
     return value * 10
})

console.log(result)

