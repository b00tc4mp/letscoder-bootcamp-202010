require('./array-polyfills')

module.exports = {
    randomStringWithPrefix(prefix) { 
        return `${prefix}${Math.random()}` 
    },

    randomWithPrefixAndSuffix(prefix, suffix) { 
        return `${prefix}${Math.random()}${suffix}` 
    },

    randomNonString() {
        return [1, true, null, undefined, {}, [], function () { }, new Date].random()
    },
    
    randomNonNumber() {
        return ['hola', true, null, undefined, {}, [], function () { }].random()
    },
    
    randomNonBoolean() {
        return ['hola', 12, null, undefined, {}, [], function () { }, new Date].random()
    },
    
    randomNonArray() {
        return ['hola', 12, null, undefined, {}, true, function () { }, new Date].random()
    },

    randomEmptyOrBlankString() { 
        return ['', ' ', '\t', '\r', '\n'].random() 
    },

    randomInteger(from, to) {  // 1, 10
        return Math.round(Math.random() * (to - from) + from)
    },

    randomBoolean() {
        return [false, true, false, true, false, true, false, true, false, true].random()
    }
} 