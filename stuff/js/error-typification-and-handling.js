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

/*
const createCustomError = name => class extends Error {
    constructor(message) {
        super(message)
    }

    static get name() { return name }
}

const PepitoError = createCustomError('PepitoError')
*/

/*
const createCustomError = name => {
    const clazz = class extends Error {
        constructor(message) {
            super(message)
        } 
    }

    Object.defineProperty(clazz, 'name', { value: name })

    return clazz
}

const PepitoError = createCustomError('PepitoError')
*/

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

const createCustomError = name => class extends Error {
    constructor(message) {
        super(message)

        this.name = name

        Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
    }
}

const PepitoError = createCustomError('PepitoError')

var error = new PepitoError('type fail')

error.toString()




"PepitoError: type fail"