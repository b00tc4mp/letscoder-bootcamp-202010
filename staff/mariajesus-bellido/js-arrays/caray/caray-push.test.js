console.log(' TEST CARAY.prototype.push()'); 

(function(){

    console.log(' should push individual values 1, "a", true, null'); 

    var x = newCaray(); 

    x.push(1); 
    x.push("a"); 
    x.push(true); 
    x.push(null); 

    console.assert(x.length === 4, "should Caray length be 4");

    console.assert(x[0] === 1, "should index 0 point out to value 1"); 
    console.assert(x[1] === "a", "should index 1 point out to value 'a'");
    console.assert(x[2] === true, "should index 2 point out to value true");
    console.assert(x[3] == null, "should index 3 point out to value null"); 


})(); 

(function() {

    console.log(" should push multiple values 1, 'a', true, null"); 

    var y = new Caray; 

    y.push(1, 'a', true, null); 

    console.assert(y[0] === 1, "should index 0 point out to value 1"); 
    console.assert(y[1] === 'a', "should index 1 point out to value 'a'"); 
    console.assert(y[2] === true, "should index 2 point out to value true"); 
    console.assert(y[3] === null, "should index 3 point to value null"); 

})(); 

(function () {

    var boleo = new Caray;

    var c1 = Math.random();
    var c2 = ["a", "b", "c", "d", "e", "f"].random(); 
    var c3 = Math.random() > .5? true : false; 
    var c4 = Math.random() > .5? null : undefined; 


    boleo.push(c1, c2, c3, c4); 

    console.assert(boleo.length === 4, "should Caray length be 4"); 

    console.assert(boleo[0] === c1, "should index 0 point out to value 1"); 
    console.assert(boleo[1] === c2, "should index 1 point out to value 'a'");
    console.assert(boleo[2] === c3, "should index 3 point out to value true"); 
    console.assert(boleo[3] === c4, "should index point out to value null"); 


})();