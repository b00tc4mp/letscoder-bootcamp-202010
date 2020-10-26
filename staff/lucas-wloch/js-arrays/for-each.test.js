console.log("TEST For-Each")

var nums = [1,2,3,4,5,6,7,8,9,10]
var result = []
console.log("multiply each number by 5 from array", nums)
forEach(nums, function(value) {
    result.push(value*5)
})

console.assert(nums.length === result.length)

for(var i =0; i< nums.length; i ++)
    console.assert(result[i] === nums[i]*5)


///////////////////

var fail = undefined

console.log("should fail when passing a null as an array")
try{
    forEach(null, function(value) {
    result.push(value*8)
})
} catch(error){
    fail = error
} 


console.assert(!(fail === undefined), "should fail")
console.assert(fail.message === "null is not an array")

/////////////////////////////////
var fail = undefined

console.log("should fail when passing a 5 as an array")
try{
    forEach(5, function(value) { //sale todo bien si esto falla.. si no falla nos tiene que salir el console.assert error
    result.push(value*8)
})
} catch(error){
    fail = error
} 


console.assert(!(fail === undefined), "should fail")
console.assert(fail.message === "5 is not an array")