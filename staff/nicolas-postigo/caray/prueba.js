function Caray() {

    if (arguments.length === 1) {
        var argument = arguments[0]

        if (typeof argument === 'number') {
            if (Number.isInteger(argument)) this.length = argument
            else throw new RangeError('Invalid array length')
        } else {
            this[0] = argument
            this.length = 1
        }
        
    } else if (arguments.length > 1) { 
        for (var i = 0; i < arguments.length; i++){
            this[i] = arguments[i];
        }   
        
        this.length = arguments.length;
        
        
    } else this.length = 0
}
    
Caray.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]

        this.length++
    }
}

Caray.prototype.forEach = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var index = 0; index < this.length; index++) {
        var element = this[index]

        callback(element, index, this)
    }
}

Caray.prototype.every = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < this.length; i++)
        if (!callback(this[i])) return false

    return true
}

Caray.prototype.map = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var result = new Caray

    for (var index = 0; index < this.length; index++) {
        var element = this[index]

        result[index] = callback(element, index, this)
        result.length++
    }

    return result
} 
Caray.prototype.some = function (callback){
    for (var i = 0; i < this.length; i++){
        if (callback(this[i])){
            return true;
        }        
    }
    return false;
}