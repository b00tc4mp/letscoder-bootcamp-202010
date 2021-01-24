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

    randomEmptyOrBlankString() { 
        return ['', ' ', '\t', '\r', '\n'].random() 
    },

    randomInteger(from, to) {  // 1, 10
        return Math.round(Math.random() * (to - from) + from)
    },

    randomId() {
        return ['5fd60bf6f81a4c16e86db546', '5fd60bf6f81a4c16e86db547', '5fd60bf6f81a4c16e86db548', '5fd60bf6f81a4c16e86db549', '5fd60bf6f81a4c16e86db54a', '5fd60bf6f81a4c16e86db54b', '5fd60bf6f81a4c16e86db54c', '5fd60bf6f81a4c16e86db54d', '5fd60bf6f81a4c16e86db54e', '5fd60bf6f81a4c16e86db54f'].random()
    },

    randomWrongLengthId() {
        return ['5fd60bf6f814a5s4cwf16e86db5', '5fd60bf6f814as4cwf16e86db5', '5fd6bf6f814as4cwf16e86db5', '5fd6bf6f814as4cwf16e86db5f3', '5fd6bf6f814as4cwf16e86db5f3f' ].random()
    }
    
}