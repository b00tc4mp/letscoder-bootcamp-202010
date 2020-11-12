console.log('TEST Caray prototype filter');

(function(){


var nums = new Caray (10, 20, 30, 40, 50);

console.log("find in the array the first element greater than 20")

iterations = 0

var result = nums.find (function(value){
    iterations++
    return value > 20
    
})


console.assert(result === 30, "should result length 1")
console.assert(nums.length === 5, "should nums length be 5")
console.assert(iterations === 3, "should iteration be 3")
})();



(function(){
    console.log (' should fail on no function callback');

    var pepito = new Caray ("casa", true, {}, 5);

    var fail;

    try {
        pepito.find(pepito)
    } catch(error) {
        fail = error
    }

    
    console.assert(fail, 'should fail be defined')
    console.assert(fail instanceof TypeError, 'should fail be instance of TypeError')
})()