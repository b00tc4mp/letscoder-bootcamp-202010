function Caray() {
    this.length = 0
}

Caray.prototype.push = function(element) {
    this[this.length] = element

    this.length++
}

Caray.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')    

    for (var index = 0; index < this.length; index++) {
        var element = this[index]

        callback(element, index, this)
    }
}

var c = new Caray()


c.push('a')
c.push('b')
c.push('c')

//for (var i = 0; i < c.length; i++) console.log(c[i])
c.forEach(function(element) { console.log(element) })

VM1031:29 a
VM1031:29 b
VM1031:29 c
undefined