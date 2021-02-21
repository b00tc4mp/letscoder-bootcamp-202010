module.exports = name => class extends Error {
    constructor(message) {
        super(message)

        this.name = name

        if (Error.captureStackTrace)
            Error.captureStackTrace(this, this.constructor)      
    } 
}