const validations = {
    validateCallback(callback) {
        if (typeof callback !== 'function') throw new TypeError (callaback + 'is not a callback')
    }

}