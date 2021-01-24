console.log('DEMO FOR MAP')

console.log('return a new array with the elements that function returns')

var arr = [1,2,3,4]

var result = map(arr, function(value) {
    return value *2
})

console.log(result)


console.assert(result.length === arr.length, 'array should have the same length')

for ( var i = 0; i < result.length; i++)
    console.assert(result[i] === arr[i] *2, 'array should be multiply by 2') 

console.assert(result.length === 4)
console.assert(result[0] === 2)
console.assert(result[1] === 4)
console.assert(result[2] === 6)
console.assert(result[3] === 8)

console.log('should fail on argument null as array')

var fail

try{
    map(null, function(){})
}catch(error){
    fail = error
}

console.assert(fail !== undefined)
console.assert(fail.message === 'null is not an array')

console.log('should fail on argument 1 as array')

var fail
try{
    map(1,function(){})
}catch(error){
    fail = error
}

console.assert(fail !== undefined)
console.assert(fail.message === '1 is not an array')


try{
    map([1,2,3],1)
}catch(error){
    console.log(error)
}



    
var result = map(arr, function(value) {
    return value+3
})

console.log(result)

for (var i = 0; i < result.length; i++)
console.assert(result[i] === arr[i]+3, 'array should add 3')

console.assert(result.length === 4)
console.assert(result[0] === 4)
console.assert(result[1] === 5)
console.assert(result[2] === 6)
console.assert(result[3] === 7)