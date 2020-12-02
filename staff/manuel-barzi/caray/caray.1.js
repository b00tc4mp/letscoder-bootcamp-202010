function Caray() {
    this.length = 0
}

Caray.prototype.push = function (element) {
    if (element !== undefined) {
        this[this.length] = element

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