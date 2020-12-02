console.log('DEMO find')

var array = ["casa", "jardin", "puerta"]


console.log('choose the word=jardin', array)

var result = find(array, function(value) {
    return value === "jardin"
})
console.log(result);