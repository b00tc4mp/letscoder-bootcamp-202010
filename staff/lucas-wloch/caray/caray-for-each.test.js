console.log('TEST Caray.prototype.forEach()');

(function(){
    console.log(' should return a new caray with item values rounded down to integers')

    var c = new Caray 

    c[0] = Math.random() * 100
    c[1] = Math.random() * 100
    c[2] = Math.random() * 100
    c[3] = Math.random() * 100
    c[4] = Math.random() * 100
    c[5] = Math.random() * 100
    c[6] = Math.random() * 100
    c.length = 7
    var iterations = 0
    var result = new Caray
    c.forEach(function(element){
        result[result.length] = Math.floor(element)
        result.length++
        iterations++
    })

    for (var i=0; i < c.length; i++){
        console.assert(Number.isInteger(result[i]), 'numbers should be integers');
        console.assert(result[i]===Math.floor(c[i]), 'numbers should match')
    }  
    console.assert(iterations === 7, 'iterations count should be 7')
    console.assert(result.length === c.length, 'result length should be the same as c.length')
})();

(function(){
    console.log(' should return a new caray with items turned into string')

    var c = new Caray
    
    c[0] = 128
    c[1] = false
    c[2] = true
    c[3] = Math.round(Math.random()*10)
    c[4] = 13 * 12
    c[5] = Math.floor(Math.random()*15)
    c[6] = "Miami"
    c[7] = "Lucas"
    c.length = 8
    var iterations = 0
    var result = new Caray
    c.forEach(function(element){
        result[result.length] = element.toString()
        result.length++
        iterations++
    })

    for(var i = 0; i < result.length; i++){
        console.assert(typeof result[i] === 'string', 'cada item deberia convertirse en string')
    }
    console.assert(iterations === 8, 'iterations count should be 8')
    console.assert(result.length === c.length, 'result.length should be the same as c.length')
})();


