console.log('DEMO FOR EVERY')



console.log('return true or false, all the numbers on the array are is higger than 3' , arr)


var arr = [1,2,3,4]
var result = every(arr, function(value) {
    return value > 2
})

console.log(result)


console.assert(result === false)


console.log('should fail on argument null as array')

var fail

try{
    every(null, function(){})
}catch(error){
    fail = error
}

console.assert(fail !== undefined)
console.assert(fail.message === 'null is not an array')

console.log('should fail on argument 1 as array')

var fail
try{
    every(1,function(){})
}catch(error){
    fail = error
}

console.assert(fail !== undefined)
console.assert(fail.message === '1 is not an array')


try{
    every([1,2,3],1)
}catch(error){
    console.log(error)
}
