(function () {
    var tiempo = new Caray
    tiempo[0]="lluvia"
    tiempo[1]="sol"
    tiempo[2]="viento"
    tiempo.length = 3

    var iterations = 0

    var result = tiempo.some(function (name) {
        iterations++

        return name.includes('o')
})

console.assert(result === true, 'should result be true')
console.assert(iterations === 3, 'should iterations count be 3')

})();


(function(){
    console.log(" should trhow an error if callback  s not a fuction")

var weather = new Caray ("rain", "sun", "wind");

var fail;

try {
    weather.some("pepito");
    } catch (error) {
        fail = error;
    }

    })();


    Caray.prototype.filter = function filter(callback) {
    
        if (typeof callback !== "function") throw new TypeError (callback + " is not a function")
        
        var result = new Caray
    
        for (var i = 0; i < this.length; i++) {
            var value = this[i]
    
            if (callback(value)) result.push(value)
        }
    
        return result
    }