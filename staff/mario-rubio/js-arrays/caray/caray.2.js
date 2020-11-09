function Caray() {
    this.length = 0
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

Caray.prototype.every = function(callback) {
    for (var i = 0; i < this.length; i++)
        if (!callback(this[i])) return false

    return true
}