console.log('TEST forEach')
console.log('multiply each item by 10 from')
var nums = [1,2,3,4,5,6,7,8,9,10]
var result = []
forEach(nums, function(value) {
    result.push(value*5)
})

console.assert(nums.length === result.length)

for(var i =0; i< nums.length; i ++)
console.assert(result[i]=== nums[i]*5)

var fail = undefined

console.log("deberias fallar cuando pasaras un null como un array")
try{ 
forEach(null, function(value) {
    result.push(value*9)

})
} catch(error){
    fail = error
}

console.assert(!(fail === undefined), "should fail")
console.assert(fail.message === "null is not  an array")


var fail = undefined

console.log("should fail when passin a 5 as an array")
try{ 
    forEach(null, function(value) {
        result.push(value*9)
    
    })
    } catch(error){
        fail = error
    }

    console.assert(!(fail === undefined),"should fail")
    console.assert(fail.message === "5 is a not an array")