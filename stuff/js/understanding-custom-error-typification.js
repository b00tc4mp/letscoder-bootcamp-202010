class Error {
    constructor(message) {
        this.message = message
    }

    //toString() { return `${Error.name}: ${this.message}` }
    toString() { return `${this.constructor.name}: ${this.message}` }
}

//var error = new Error('hola mundo')

//error.toString()


/*
class PepitoError extends Error {
    constructor(message) { super(message) }

    //toString() { return `${PepitoError.name}: ${this.message}` }

    //static get name() { return 'PepitoError' }
}
*/


const createCustomError = name => class extends Error {
    constructor(message) {
        super(message)
    } 

    static get name() { return name }
}

const PepitoError = createCustomError('PepitoError')


/*
const PepitoError = class extends Error {
    constructor(message) {
        super(message)
    }
}
*/


/*
const createCustomError = () => class extends Error {
    constructor(message) {
        super(message)
    }
}

const PepitoError = createCustomError()
*/

/*
const createCustomError = function() {
    return class extends Error {
        constructor(message) {
            super(message)
        }
    }
}

const PepitoError = createCustomError()
*/

var error = new PepitoError('type fail')

error.toString()



"PepitoError: type fail"
console.dir(error)
VM13828:1 
Object
message: "type fail"
__proto__: Error
constructor: class extends
arguments: (...)
caller: (...)
length: 1
name: (...)
prototype: Error {constructor: ƒ}
get name: ƒ name()
__proto__: class Error
[[FunctionLocation]]: VM13821:27
[[Scopes]]: Scopes[3]
__proto__: Object