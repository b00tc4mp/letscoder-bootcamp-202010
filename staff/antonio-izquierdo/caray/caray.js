function Caray() {
    if (arguments.length === 0) {
        this.length = 0
    } 
    if (arguments.length === 1) {
        var argument = arguments[0]
    
        if (typeof argument === 'number') {
            if (Number.isInteger(argument)) this.length = argument
            else throw new RangeError('Invalid array length')
        } else {
            this[0] = argument
            this.length = 1
        }
    } 
    if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++){
        this[i] = arguments[i]
        }
        this.length = arguments.length
    } 
}

Caray.prototype.push = function() {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]

        this.length++
    }
}

Caray.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        callback(element, i, this)
    }
}

Caray.prototype.every = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < this.length; i++)
        if (!callback(this[i])) return false

    return true
}

Caray.prototype.some = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) return true
}
    return false
} 

Caray.prototype.filter = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var result = new Caray;
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) { 
        result[result.length] = this[i];
        result.length++;
        }
    }
    return result;
}

Caray.prototype.slice = function(start, end) {
    if (start === undefined) start = 0
    if (end === undefined) end = this.length
    if (start < 0) start = this.length + start
    if (end < 0) end = this.length + end
    var result = new Caray;
    for (var i = start; i< end; i++) { 
        result[result.length] = this[i]
        result.length++;
    }
    return result
}  

Caray.prototype.find = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element, i, this)) {
            return element
        }
    }
}

Caray.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')  
    
    var result = []

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        result[i] = callback(element, this)
    }
    return result
}

Caray.prototype.reduce = function(callback, initialValue) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')  

    if (initialValue !== undefined) {
        var accum = initialValue

        for (var index = 0; index < this.length; index++) {
            var element = this[index]

            accum = callback(accum, element, index, this)
        }

        return accum
    } else {
        var accum = this[0]

        for (var index = 1; index < this.length; index++) {
            var element = this[index]

            accum = callback(accum, element, index, this)
        }

        return accum
    }
}
