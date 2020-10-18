function Caray() {
    this.length = 0
    
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

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        this[i] = callback(element, this)
    }
    return this
}
