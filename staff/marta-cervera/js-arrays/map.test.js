console.log ("MAP TEST")

var nums = [1,2,3,4,5,6]
console.log (" turn array numbers and turn into string ", nums)

var result = map(nums, function(value) {
    return value.toString()
})

console.assert( nums.length === result.length, "falla si el array que tira map es diferente longitud que el inicial")
for ( var i = 0; i< nums.length; i++)
        console.assert(result[i] === nums[i].toString(), "no funciona el mapeado")
        
////////////
var fail = undefined
 console.log( "should fail on undefined argument as a function")
try {
 var result = map(nums)

} catch(error){
    fail =  error
}
console.assert(fail !== undefined, "fail es undefined, por lo que no funciona este texto") //SALTA CUANDO FAIL ES UNDEFINED si esta true no va a dar error, pero si fail es undefined quiere decir que no funciona, para cuando fail sea UNDe cuando fail NO es undef
console.assert(fail.message === "undefined is not a function")

//////
