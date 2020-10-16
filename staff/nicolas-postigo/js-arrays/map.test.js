function map (array2, callback) {
    if (!(array2 instanceof Array)) throw new TypeError(array2 + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    var result = []
    for (i = 0; i < array2.length; i++){
    console.assert(result[i] === array2[i] * 10, "incorrect") 
        result[i]=callback(array2[i],i)
    }
return result;
}

console.log("DEMO FOR MAP")


var array2 = [1, 2, 3];

console.log('mark  the ones smaller than 2 as false', array2)



var result = map (array2, function(elemento, index) {
return elemento > 2

})
console.assert(result.length === 3)
console.assert(result[0] == true, "it should be false")
console.assert(result[1] == false)
console.assert(result[2] == true)

console.assert(result.length !== array2.length, "no correct")

console.log("el error del catch")


try {
    map (null, function() {})
} catch (error) {
    console.log(error)
}

console.log("Display false of true from the logic")

console.log(result)