console.log('TEST Caray.prototype.slice()');

(function(){
    console.log(' should return a new caray with items from index 1 to 4');

    var c = new Caray;

    c[0] = Math.round(Math.random() * 100);
    c[1] = Math.round(Math.random() * 100);
    c[2] = Math.round(Math.random() * 100);
    c[3] = Math.round(Math.random() * 100);
    c[4] = Math.round(Math.random() * 100);
    c[5] = Math.round(Math.random() * 100);
    c[6] = Math.round(Math.random() * 100);
    c.length = 7;
    
    var result = c.slice(1,5);
    
    for (var i=0; i < result.length; i++){
        console.assert(result[i]===c[i+1], 'numbers should match from index 1 to 4 from c caray');
    };
    
    console.assert(result.length === 4, 'result length should be 4');
    
})();

(function(){
    console.log(" should return 'Barcelona', 'Madrid', 'Valencia' from cities caray");

    var c = new Caray;

    c[0] = 'Buenos Aires';
    c[1] = 'Cordoba';
    c[2] = 'Rosario';
    c[3] = 'Barcelona';
    c[4] = 'Madrid';
    c[5] = 'Valencia';
    c[6] = 'Paris';
    c[7] = 'Versalles';
    c[8] = 'Notre Dame';
    c.length = 9;
    
    var result = c.slice(3,6);

    for (var i = 0; i < result.length; i++){
        console.assert(result[i]===c[i+3], 'numbers should match from index 3 to 5 from c caray');
    }
    
    console.assert(result.length === 3, 'result length should be 3');
    
})();


(function(){
    console.log(" should return 'Versalles', 'Notre Dame', from cities caray");

    var c = new Caray;

    c[0] = 'Buenos Aires';
    c[1] = 'Cordoba';
    c[2] = 'Rosario';
    c[3] = 'Barcelona';
    c[4] = 'Madrid';
    c[5] = 'Valencia';
    c[6] = 'Paris';
    c[7] = 'Versalles';
    c[8] = 'Notre Dame';
    c.length = 9;
    
    var result = c.slice(-2);

    for (var i = 0; i < result.length; i++){
        console.assert(result[i]===c[i+7], 'numbers should match index 7 and 8 from c caray');
    }
    
    console.assert(result.length === 2, 'result length should be 2');
    console.assert(result[0]==='Versalles','index 0 from result should be equal to "Versalles"');
    console.assert(result[1]==='Notre Dame','index 1 from result should be equal to "Notre Dame"');
    
})();


(function(){
    console.log(' should fail when passing an array as a number in the first argument');

    var c = new Caray;
    var fail;

    try{
        var result = c.slice([1,2,3,'a',true,'b'],2);
    }catch(error){
        fail = error
    }

    console.assert(fail,'fail should be defined');
    console.assert(fail.message === 'object is not a number', 'messages should match');
})();

(function(){
    console.log(' should fail when passing a function as a number in the first argument');

    var c = new Caray;
    var fail;

    try{
        var result = c.slice(function(){},2);
    }catch(error){
        fail = error
    }

    console.assert(fail,'fail should be defined');
    console.assert(fail.message === 'function is not a number', 'messages should match');
})();

(function(){
    console.log(' should fail when passing a string as a number in the second argument');
    
    var c = new Caray;
    var fail;

    try{
        var result = c.slice(1,'string');
    }catch(error){
        fail = error
    }
    
    console.assert(fail,'fail should be defined');
    console.assert(fail.message === 'string is not a number', 'messages should match');
    
})();

(function(){
    console.log(' should fail when passing a function as a number in the second argument');
    
    var c = new Caray;
    var fail;

    try{
        var result = c.slice(1,function(){});
    }catch(error){
        fail = error
    }

    console.assert(fail,'fail should be defined');
    console.assert(fail.message === 'function is not a number', 'messages should match');
    
})();

(function(){
    console.log(' should fail when passing a null as a number in the second argument');
    
    var c = new Caray;
    var fail;

    try{
        var result = c.slice(1,null);
    }catch(error){
        fail = error
    }

    console.assert(fail,'fail should be defined');
    console.assert(fail.message === 'object is not a number', 'messages should match');
    
})();