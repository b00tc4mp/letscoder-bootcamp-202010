console.log('TEST Caray.prototype.find()');

(function () {
    console.log(' should return "crocodile" from ["wolf", "sheep", "crocodile", "whale", "bunny"] for being the first animal heavier than 600 Kg')

    var c = new Caray
    c[0] = {animal:'wolf', weight:75}
    c[1] = {animal:'sheep', weight:40}
    c[2] = {animal:'crocodile', weight:700}       
    c[3] = {animal:'whale', weight: 4500}
    c[4] = {animal:'bunny', weight: 3}
    c.length = 5
    
    var iterations = 0

    var result = c.find(function(animal) {
        iterations++
        return animal.weight > 600
    })
    console.assert (result.animal === 'crocodile', "should return crocodile")
    console.assert (iterations === 3, "iteration's count should be 3");
})();

(function () {
    console.log(' should return 4 from [1,2,3,4,5] for being the first number higher than 3')

    var c = new Caray
    c[0] = 1;
    c[1] = 2;
    c[2] = 3;   
    c[3] = 4;
    c[4] = 5;
    c.length = 5
    
    var iterations = 0
   
    var result = c.find(function(element) {
        iterations++
        return element > 3
    })
    console.assert(result === 4, "should return 4")
    console.assert (iterations === 4, "iteration's count should be 4");
})();
