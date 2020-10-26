
console.log('TEST Caray.protototype.every()'); 


(function(){
    console.log(' should return true for sara, luisa, maria, sandra, checking they all contain a letter "a" in their names'); 


var firstNames = new Caray 
firstNames[0] = 'sara'; 
firstNames[1] = 'luisa'; 
firstNames[2] = 'maria'; 
firstNames[3] = 'sandra'; 
firstNames.length = 4; 


var iterations = 0; 

var result = firstNames.every(function (name) {
    iterations++

    return name.includes('a'); 
}) 

    console.log(result === true, 'should result be true'); 
    console.log(iterations === 4, 'should iterations count a total of 4'); 
})()


(function () {
    console.log(' should return false for all first names, as they do not contain a vowel "o"'); 

    var firstNames = new Caray 
    firstNames[0] = 'sara'; 
    firstNames[1] = 'luisa'; 
    firstNames[2] = 'maria'; 
    firstNames[3] = 'sandra'; 
    firstNames.length = 4; 

    var iterations = 0 
    var result = firstNames.every(function (name) {
        iterations++

        return name.includes(o); 

    })

    console.assert(result === false, 'should result be false'); 
    console.assert(iterations === 3, 'should iterations count to be 2'); 

    })(); 


(function () {
    console.log(' should fail on non-function callback'); 

    var callback = [1, true, 'string', null, undefined, {}].random(); 

    var firstNames = new Caray 

    var fail 

    try {
        firstNames.every(callback); 
    } catch (error) {
        fail = error; 
        
    }

console.assert (fail, "should fail be defined"); 
console.assert (fail instanceof TypeError, "should fail be an instance of TypeError");

})(); 





