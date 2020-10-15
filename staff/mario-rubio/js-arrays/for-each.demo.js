console.log('DEMO forEach')

var nums = [1, 2, 3, 4, 5]


console.log('calculate the remainer by 2 of each item from array', nums)

var result = []

forEach(nums, function(value) {
    var remainder = value % 2

    if (remainder === 0) result.push(value)
})

console.log(result)


console.log('multiply each item by 10 and send it to the console from array', nums)

forEach(nums, function(value) {
    console.log(value * 10)
})


console.log('multiply each item and show the new result with the text NUEVO RESULTADO', nums)
var arr = [1,2,3,4,5]
forEach(arr, function(value){
    console.log(value*5 +""+ "nuevo resultado")

})


console.log('multiply each item *5', nums)

var hola = forEach( [2,4,6,8],function(value){
    var result = arr[i*5]
})
console.log(result)




