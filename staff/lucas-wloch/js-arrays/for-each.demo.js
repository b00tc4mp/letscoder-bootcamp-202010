// console.log('DEMO forEach')

// var nums = [1, 2, 3, 4, 5]

// console.log('calculate the remainer by 2 of each item from array', nums)

// var result = []

// forEach(nums, function(value) {
//     var remainder = value % 2

//     if (remainder === 0) result.push(value)
// })

// console.log(result)

// console.log('show each item in the console from array', nums)

// forEach(nums, console.log)

// console.log('multiply each item by 10 and send it to the console from array', nums)

// forEach(nums, function(value) {
//     console.log(value * 10)
// })

forEach([1, 2, 3], function(value){
    console.log(value * 2)
})

forEach([1, 2, 3], console.log)
1
2
3

var arr = [2,6,8,12]

forEach(arr,function(value){
    document.write( (value + 10) + " corresponde al nuevo valor de " + value + "  ")
})
