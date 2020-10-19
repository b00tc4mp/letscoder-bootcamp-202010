console.log('TEST Caray.prototype.map()');

(function(){
    console.log(" should return new caray with numbers multiplied by 10");

    var c = new Caray;

    c[0] = Math.round(Math.random()*15);
    c[1] = Math.round(Math.random()*15);
    c[2] = Math.round(Math.random()*15);
    c[3] = Math.round(Math.random()*15);
    c[4] = Math.round(Math.random()*15);
    c[5] = Math.round(Math.random()*15);
    c[6] = Math.round(Math.random()*15);
    c.length = 7;
    var iterations = 0
    var result = c.map(function(element){
        iterations ++
        return element * 10;
    });
    
    for (var i = 0; i < result.length; i++){
        console.assert(result[i]===c[i]*10, "should return numbers multiplied by 10");
    }
    console.assert(result.length===c.length, "both carays should have the same length");
    console.assert(iterations===c.length, "the function should have mapped the whole caray");

})();

(function(){
    console.log(" should return all elements turned into strings");

    var c = new Caray;

    c[0] = [true,false,true,false,true,false,true,false,true,false].random() ;
    c[1] = Math.round(Math.random()*550);
    c[2] = Math.round(Math.random()*550);
    c[3] = Math.round(Math.random()*550);
    c[4] = Math.round(Math.random()*550);
    c[5] = [true,false,true,false,true,false,true,false,true,false].random();
    c[6] = [true,false,true,false,true,false,true,false,true,false].random();
    c[7] = Math.round(Math.random()*550);
    c.length = 8;
    var iterations = 0;
    var result = c.map(function(element){
        iterations++;
        return element.toString();
    });

    for (var i = 0; i < result.length; i++){
        console.assert(result[i]===c[i].toString(),'should return values turned to strings');
    };
    console.assert(iterations===c.length,'the method should have mapped the whole caray');
    console.assert(result.length===c.length,'both carays should have the same lenght');
})();
////////////////////////////

(function(){
    console.log(' should fail when passing an array as an argument');

    var c = new Caray;
    var fail;

    try{
        var result = c.map([1,2,3,'a',true,'b']);
    }catch(error){
        fail = error
    }

    console.assert(fail,'fail should be defined');
    console.assert(fail.message === 'object is not a function', 'messages should match');
    
})();

(function(){
    console.log(' should fail when passing a number as an argument');

    var c = new Caray;
    var fail;

    try{
        var result = c.map(Math.round(Math.random()*15));
    }catch(error){
        fail = error
    }

    console.assert(fail,'fail should be defined');
    console.assert(fail.message === 'number is not a function', 'messages should match');
})();

(function(){
    console.log(' should fail when passing a string as an argument');
    
    var c = new Caray;
    var fail;

    try{
        var result = c.map('string');
    }catch(error){
        fail = error
    }
    
    console.assert(fail,'fail should be defined');
    console.assert(fail.message === 'string is not a function', 'messages should match');
    
})();

(function(){
    console.log(' should fail when passing an object as an argument');
    
    var c = new Caray;
    var fail;

    try{
        var result = c.map({});
    }catch(error){
        fail = error
    }

    console.assert(fail,'fail should be defined');
    console.assert(fail.message === 'object is not a function', 'messages should match');
    
})();

(function(){
    console.log(' should fail when passing a null as an argument');
    
    var c = new Caray;
    var fail;

    try{
        var result = c.map(null);
    }catch(error){
        fail = error
    }

    console.assert(fail,'fail should be defined');
    console.assert(fail.message === 'object is not a function', 'messages should match');
    
})();