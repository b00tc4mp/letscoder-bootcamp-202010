function Caray(){
    this.length = 0
}

Caray.prototype.filter = function(callback){
    var result = new Caray
    for (var i=0; i<this.length; i++){
        if(callback(this[i])) {
            result[result.length] = this[i]
            result.length++
        }
    }
    return result 
}

Caray.prototype.push = function() {

    for (var i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i]
        this.length++
    }
}

Caray.prototype.forEach = function (callback) {
    if(typeof callback !== "function") throw new TypeError(typeof callback + " is not a function")
    
    for(var index = 0; index < this.length; index++) {

        var element = this[index]


        callback(element, index, this)
    }
}

Caray.prototype.every = function(callback) {

    for (var i = 0; i < this.length; i++){
        if (!callback(this[i])) return false

    }
    return true
}

Caray.prototype.map = function(callback) {
    if(typeof callback !== 'function')throw new TypeError(typeof callback +' is not a function');
    var result = new Caray
    for (var i = 0; i < this.length; i++){
        // result.push(callback(this[i]))
        result[i] = callback(this[i])
        result.length++
    }
    return result
}

Caray.prototype.reduce = function(callback,initialValue) {
    if(typeof callback !== 'function') throw new TypeError( typeof callback +" is not a function")
    
    if(initialValue !== undefined){
        var accum = initialValue

        for (var i = 0; i < this.length; i++){
            var element = this[i]

            accum = callback(accum,element,index,this)
        }
        return accum
    } else{
        var accum = this[0]

        for (var i = 1; i < this.length; i++){
            var element = this[i]

            accum = callback(accum,element,index,this)
        }
        return accum
    }
}

Caray.prototype.slice = function(start,end){
    if(typeof start !== 'number' && typeof start !== 'undefined') throw new TypeError(typeof start + ' is not a number');
    if(typeof end !== 'number' && typeof end !== 'undefined') throw new TypeError(typeof end + ' is not a number');
    var result = new Caray

    if (start === undefined) start = 0
    if (start < 0) start = this.length + start
    //si start es -2 entonces solo extraemos los ultimos 2 elementos del Caray
    if (end === undefined) end = this.length
    //si no nos pasan un end, extraemos hasta el final del Caray
    if (end < 0) end = this.length + end
    //si end es negativo nos dice cuantos elementos evitaremos al final
    for (var i = start; i< end; i++){
        result[result.length] = this[i]
        result.length++
    }
    return result
}

Caray.prototype.some = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(calback+' is not a function');
    for (var i = 0; i < this.length; i++){
        if(callback(this[i])) return true
    }
    return false
}

