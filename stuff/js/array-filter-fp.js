var nums = [1, 2, 3, 4, 5]

/*
var result = []

nums.forEach(function(value) {
    var remainder = value % 2

    if (remainder === 0) result.push(value)    
})
*/

/*
var result = nums.filter(function(value) {
    return value % 2 === 0
})
*/

/*
var result = nums.filter(function(value) { return value > 3 })
*/

function filter(array, expression) {
    debugger
    var result = []
    
    for (var i = 0; i < array.length; i++) {
        var value = array[i]

        if (expression(value)) result.push(value)
    }

    return result
}

/*
var result = filter(nums, function(value) {
    return value % 2 === 0
})
*/

var result = filter(nums, function(value) { return value > 3 })