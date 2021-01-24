console.log("MAP TEST")

var nums = [1,2,3,4,5,6]
console.log("turn array numbers into string from array", nums)

var result = map(nums,function(value){return value.toString()})

// console.assert(false, "salta porque le di false")
console.assert(nums.length === result.length, "falla si el array que tira map tiene diferente longitud que en inicial")
for(var i=0;i<nums.length;i++)
    console.assert(result[i]=== nums[i].toString(), "no funciona el mapeado")

///////////////////////////////////////////////////
console.log("multiply values * 2 from array",nums)
var result2 = map(nums,function(value){return value*2})

console.assert(nums.length === result.length,"falla si el array que tira map tiene diferente longitud que en inicial")
for(var i=0;i<nums.length;i++)
    console.assert(result2[i] === (nums[i]*2), "no funciona el mapeado")
////////////////////////////
var fail = undefined

console.log("should fail on undefined argument as a function")
try{
    var result = map(nums)
} catch(error){
    fail = error
    // console.log(error)
}

console.assert(fail !== undefined, "fail es undefined, entonces no funciona este test")
console.assert(fail.message === "undefined is not a function", "los mensajes no hacen match")

//////////////////////////////

var fail = undefined

console.log("should fail on function as an array")
try{
    var result = map(function(){},function(){})
} catch(error){
    fail = error
    // console.log(error)
}

console.assert(fail !== undefined, "fail es undefined, entonces no funciona este test")
console.assert(fail.message === "function is not an array", "los mensajes no hacen match")

//////////////////////////////

var fail = undefined

console.log("should fail on object as an array")
try{
    var result = map({},function(){})
} catch(error){
    fail = error
    // console.log(error)
}

console.assert(fail !== undefined, "fail es undefined, entonces no funciona este test")
console.assert(fail.message === "object is not an array", "los mensajes no hacen match")


//     console.log('should fail on argument null as array')

// var _error

// try {
//     forEach(null, function() {})
// } catch (error) {
//     _error = error
// }

// console.assert(_error !== undefined)
// console.assert(_error.message === 'null is not an array')