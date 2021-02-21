function Caray() {
    if( arguments.length === 0){
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
    if(arguments.length > 1) {//recorrer todos las paramentros pepito y grillo
       for(var i= 0; i < arguments. length; i++) {
        this[i]= arguments[i]
        this.length = arguments.length
       }
    }

}


Caray.prototype.forEach = function (callback) {
    if( typeof callback !== "function") throw new TypeError(callback + " is not a function")
    
    for (var index = 0; index < this.length; index ++) { 
    
    var element = this [index]
    
    callback (element, index, this) 
    
}
}

Caray.prototype.push = function() {
    for (var i= 0; i< arguments.length; i++) { 
        this[this.length] =  arguments [i]
        
        this.length++
}
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

Caray.prototype.some = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) return true
}
    return false
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
        result[index] = callback(element, index, this)
        result.length ++
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
    /*var c = new Caray//lama a la funcion y crea un nuevo array es equivalente a [] y de ahi le metes elementos
 cuando se llama a c.reduce llamas a la funcion */ 
   
    Caray.prototype.reduce= function(callback, initialValue) {
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')  

        if (initialValue !== undefined) {
        var accum = initialValue

        for (var index = 0; index < array.length; index++) {
            var element = array[index]

            accum = callback(accum, element, index, array)
        }

        return accum
    } else {
        var accum = array[0]

        for (var index = 1; index < array.length; index++) {
            var element = array[index]

            accum = callback(accum, element, index, array)
        }

        return accum
    }
}



