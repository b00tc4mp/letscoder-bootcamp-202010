// for in
var array = [1, 2, 3]

for (var key in array) console.log(array[key])
VM1090:3 1
VM1090:3 2
VM1090:3 3
undefined

// for of
var array = [1, 2, 3]

for (var value of array) console.log(value)
VM1111:3 1
VM1111:3 2
VM1111:3 3