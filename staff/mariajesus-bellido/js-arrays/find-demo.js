console.log("DEMO find")

var array = [1,2,3,4,5,6]

console.log("Returns the value of an array that matches with 5", array)

var result = find (array, function (value) {

return value === 5
})

console.log(result)