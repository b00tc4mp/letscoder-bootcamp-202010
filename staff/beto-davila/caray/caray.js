function Caray() {
    if (arguments.length === 1) {
        var argument = arguments[0];

        if (typeof argument === 'number') {
            if (Number.isInteger(argument)) this.length = argument;
            else throw new RangeError('Invalid array length');
        } else {
            this[0] = argument;
            this.length = 1;
        }
    } else if (arguments.length > 1) { 
        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i];

            if (typeof argument === 'number')
                if (Number.isInteger(argument)) this.length = argument;
                else throw new RangeError('Invalid array length');
            else
                this[i] = argument;
                this.length++;
        }
    } else this.length = 0;
}

Caray.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];

        this.length++;
    }
}

Caray.prototype.forEach = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var index = 0; index < this.length; index++) {
        var element = this[index];

        callback(element, index, this);
    }
}

Caray.prototype.every = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < this.length; i++)
        if (!callback(this[i])) return false;

    return true;
}

Caray.prototype.find = function(callback) {
    for (var i = 0; i < this.length; i++)
        if (callback(this[i])) return this[i];

    return false;
}

Caray.prototype.filter = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');

    var newArr = new Caray;
    newArr.length = 0;
    for (var i = 0; i < this.length; i++){
        if (callback(this[i])) {
            newArr[newArr.length] = this[i];
            newArr.length++;
        }
    } 
    return newArr;
}

Caray.prototype.some = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    for (var i = 0; i < this.length; i++) {
   
        if (callback(this[i]))  return true;
     } 
     return false;
 }

 Caray.prototype.map = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    var newArr = new Caray;
    newArr.length = 0;
    for (var i = 0; i < this.length; i++) {
        newArr[i] = callback(this[i]);
        newArr.length++;
    }
    return newArr;
 }

 Caray.prototype.pop = function() {
    if(this.length === 0) return undefined;
    var removed = this[this.length - 1];
    for(var i = 0; i < this.length; i++) {

        if(i === this.length - 1) {
        this.length = this.length - 1;
        }
    }
    return removed;
 }

 Caray.prototype.find = function(callback) {
        
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
        var element;
        for (var i = 0; i < this.length; i++) {
            if(callback(this[i])) {
                element = this[i];
                return element;
            }
        } 
}

Caray.prototype.slice = function (start, end) {

    var newArr = new Caray();
    
    if (start === undefined) start = 0;
    if (start < 0) start = this.length + start;
    if (start > this.length) return;
    if (end === undefined) end = this.length;
    if (end < 0) end = this.length + end;

    for (var i = start; i < end; i++) {
        newArr[newArr.length] = this[i];
        newArr.length++;
    }
    return newArr;
}

Caray.prototype.reduce = function(callback, initialValue) {
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    if (initialValue !== undefined) {
        var accum = initialValue;
        for (var i = 0; i < this.length ; i++) {
            var element = this[i];
            accum = callback(accum, element);
          }
          return accum;
    } else {
        var accum = this[0];
        for (var i = 1; i < this.length ; i++) {
            var element = this[i];
            accum = callback(accum, element);
        }
          return accum;
    } 

}

Caray.prototype.some = function(callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
              return true;
        }
    } 
    return false;
}


Caray.prototype.splice = function(start, deleteCount, element) {
        
    if (deleteCount === 0) {
    for (var i = this.length; i >= start; i--) {
    this[i] = this[i - 1];
    }
    this[start] = element;
    } else {
        var extracted = new Caray();
        for (var i = start; i < start + deleteCount; i++) {
            //extracted.push(this[i]);
            extracted = extracted[extracted.length] + this[i];
            extracted.length++;
        }
       this[start] = element;
        for (var i = start + deleteCount; i < this.length; i++) {
            this[i - 1] = this[i];
            }
        this.length = this.length - (deleteCount - 1);
        return extracted;
        }
}

Caray.prototype.join = function(separator) {
    debugger
    var str;
    if (this.length === 0) return str;    
    for (var i = 0; i < this.length; i++) {    
        if (separator !== undefined) {
            str = str + separator + this[i];
        } else if (separator === '') {
            str = str + this[i];
        } else {
            str = str + ',' + this[i];
        }      
    }
    return str;
}



 
