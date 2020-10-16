console.log('TEST forEach')

var nums = [1,2,3,4,5,5,6,7,8,9,10]
var result = []

forEach(nums, function(value) {
    result.push(value*5)

})

console.assert(nums.length === result.length)
    for(var i= 0; i< nums.length; i++)
console.assert (result[i]=== nums[i]*5)

///////

var fail

console.log("should fail when passing a null as an array")

try {
        forEach(null, function(value){
        result.push(value*8)
        
})
} catch(error){
    fail = error
}


console.assert(!(fail === undefined), "Should fail")
console.assert(fail.message === "null is not an array")
//////
var fail= undefined
console.log ("Should fail when passin a 5 as an array")
    try {
    forEach(5, function(value){
    result.push(value*8)
    
})
} catch(error){
fail = error
}

console.assert(!(fail===undefined), "Should fail")
console.assert (fail.message === "5 is not an array")


////
/*var fail= undefined

    try {
    forEach(5, function(value){
    result.push(value*8)
    
})
}   catch(error){
fail = error
}


console.assert(!(fail===undefined), "Should fail")*/ 