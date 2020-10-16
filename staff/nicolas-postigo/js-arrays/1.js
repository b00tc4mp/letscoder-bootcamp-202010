var array = [12, 22, 33, 98, 109];
var result = reduce(array, function(result, element){
        return result + element
});

function reduce (array, callback, acumulado){

            var result = (acumulado !== undefined) ? acumulado : undefined
            for (i = 0; i < array.length; i++){
                if(acumulado === undefined && i === 0){
                    result= array[i]}else{
                    result = callback(result, array[i], i, array)
                }
            }    
return result
}

console.log(result)



console.assert(result.length === 3)
console.assert(result[0] === 2)
console.assert(result[1] === 4)
console.assert(result[2] === 6)

console.log('should fail on argument null as array')

var _error

try {
    forEach(null, function() {})
} catch (error) {
    _error = error
}

console.assert(_error !== undefined)
console.assert(_error.message === 'null is not an array')

console.log('should fail on argument 1 as array')

var _error

try {
    forEach(1, function() {})
} catch (error) {
    _error = error
}

console.assert(_error !== undefined)
console.assert(_error.message === '1 is not an array') 