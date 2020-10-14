console.log('DEMO find')


var array = ["casa", "jardin", "puerta"]

var result = find(array, function(value) {
    return value === "jardin"
})
console.log(result);