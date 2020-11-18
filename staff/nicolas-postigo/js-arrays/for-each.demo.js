console.log('DEMO forEach')

var nums = [1, 2, 3, 4, 5]

console.log('calculate the remainer by 2 of each item from array', nums)

var result = []

forEach(nums, function(value) {
    var remainder = value % 2

    if (remainder === 0) result.push(value)
})

console.log(result)

console.log('show each item in the console from array', nums)

forEach(nums, console.log)

console.log('multiply each item by 10 and send it to the console from array', nums)

forEach(nums, function(value) {
    console.log(value * 10)
})

function forEach(array, expression) {    
    for (var i = 0; i < array.length; i++) {
        var item = array[i]

        expression(item)
    }
}


var nums = [1, 2, 3, 4, 5]
var result = []

forEach(nums, function(value) {
    var remainder = value

    if (remainder === 0) result.push(value)
    console.log(value * 10)
})



function forEach(array, callback) {    
    for (var i = 0; i < array.length; i++) {
        var item = array[i]

        callback(item)
    }
}

var nums = [1, 2, 3, 4, 5]
var result = forEach(nums, function(value) {
    var remainder = value

    if (remainder === 0) result.push(value)
    return value * 10
})



function forEach(array, callback) {    
    for (var i = 0; i < array.length; i++) {
        var item = array[i]

        callback(item)
    }
}