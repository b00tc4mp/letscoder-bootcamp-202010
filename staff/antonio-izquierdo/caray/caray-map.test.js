console.log('TEST Caray.prototype.map()');

(function() {
    console.log(' should return each item of the array "[1, 2, 3, 4, 5]" multiplied by 2');

    var c = new Caray;
    c[0] = 1;
    c[1] = 2;
    c[2] = 3;
    c[3] = 4;
    c[4] = 5;
    c.length = 5;
    
    var iterations = 0;

    var result = c.map(function(value) {
        iterations ++
        return value * 2
    })
    for (var i = 0; i <result.length; i++) { 
    
    console.assert (result[i] === c[i] * 2, "should return '[2, 4, 6, 8, 10]") 
    console.assert(iterations === 5, "iteration's count should be 5")
    };
})();

(function() { 
    console.log (' should return each item of the array "[car, dog, jacket, money]" with "my", because i am a selfish person')
    var c = new Caray;
    c[0] = "car";
    c[1] = "dog";
    c[2] = "jacket";
    c[3] = "money";
    c.length = 4;

    var iterations = 0;

    var result = c.map(function(value){
        iterations ++
        return "my " + value 
    })

    for (var i = 0; i <result.length; i++) {

    console.assert (result[i] === "my " + c[i], "should return ['my car', 'my dog', 'my jacket', my money']")
    console.assert(iterations === 4, "iteration's count should be 5")
    };
})();

(function() { 
    console.log (' should return an error if callback parameter is not a function()')
    
    var c = new Caray ()
    
    var fail;

    try{
        c.map(1);
    } catch (error) {
        fail = error;
    }
    console.assert(fail instanceof TypeError, "should be a TypeError");
    console.assert(fail.message === "1 is not a function", "the error message is not correct")
})();

(function() {
    console.log(' should check multiple random values')

    var c = new Caray

    c[0] = Math.random()
    c[1] = Math.random() > .5? ["a,b,c,d,e,f"] : [""]
    c[2] = Math.random() > .5? true : false
    c[3] = Math.random() > .5? null : undefined
    //c[4] = Math.random() > .5? 0 : NaN
    c.length = 5

    console.assert(c.length === 5, 'caray length should be 5')
    
    var iterations = 0

    var result = c.map(function(value){
        iterations ++
        return value
    })
    //console.log(result);
    console.log(c[0]);
    console.log(c[1]);
    console.log(c[2]);
    console.log(c[3]);
    console.assert(result[0] === c[0], 'result of map function on index 0 should equal c[0]')
    console.assert(result[1][0] === c[1][0], 'new Caray index 1 should point to c[1]')
    console.assert(result[2] === c[2], 'new Caray index 2 should point to c[2]')
    console.assert(result[3] === c[3], 'new Caray index 3 should point to c[3]')
    //console.assert(result[4] === c[4], 'new Caray index 4 should point to var v5')
})();