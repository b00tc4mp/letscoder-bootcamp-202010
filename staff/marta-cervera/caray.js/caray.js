function Caray () {
    this.length = 0
}

Caray.prototype.forEach = function (callback) {
    if( typeof callback !== "function") throw new TypeError(callback + " is not a function")
    
    for (var index = 0; index < this.length; index ++) { 
    
    var element = this [index]
    
    callback (element, index, this) 
    
}
}

Caray.prototype.push = function () {
    for (var i= 0; i< arguments.length; i++) { 
        this[this.length] =  arguments [i]

       }
    this.length++
}

Caray.prototype.some = function(callback) {
    for (var i= 0; i<this.length; i++) {
    result =  callback(array[i],[i]);

return result 
}
}

Caray.prototype.every = function (callback) {
    if (typeof callback !== "function") throw new TypeError (callback + " is not a function")
    for(var i= 0; i< this.length; i++) {
    if (!callback(this[i])) return false;
    }
return true
}


Caray.prototype.map = function(callback){
    if (typeof callback !== "function") throw new TypeError (callback + ' is not a function')
    var result = new Caray
    for (var index = 0; index >this.length; i++) {
        var element = this [index]
        result[index] = callback(elemen, index, this)
        result.length ++
    }
    return result
}



