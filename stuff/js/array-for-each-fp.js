var nums = [1, 2, 3, 4, 5]

/*
var result = []

for (var i = 0; i < nums.length; i++) {
    var value = nums[i]

    var remainder = value % 2

    if (remainder === 0) result.push(value)
}
*/

/*
var result = []

nums.forEach(function(value) {
    var remainder = value % 2

    if (remainder === 0) result.push(value)    
})
*/

function forEach(array, expression) {    
    debugger
    for (var i = 0; i < array.length; i++) {
        var item = array[i]

        expression(item)
    }
}

/*
var result = []

forEach(nums, function(value) {
    var remainder = value % 2

    if (remainder === 0) result.push(value)
})
*/

// forEach(nums, console.log)

forEach(nums, function(value) {
    console.log(value * 10)
})