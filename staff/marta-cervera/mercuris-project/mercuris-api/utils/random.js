require('./array-polyfills')

module.exports = {
    randomStringWithPrefix(prefix) { 
        return `${prefix}${Math.random()}` 
    },

    randomWithPrefixAndSuffix(prefix, suffix) { 
        return `${prefix}${Math.random()}${suffix}` 
    },
    
    randomNonString() {
        return [1, true,  {}, [], function () { }, new Date].random()
    },

    randomEmptyOrBlankString() { 
        return ['', ' ', '\t', '\r', '\n'].random() 
    },

    randomInteger(from, to) {  
        return Math.round(Math.random() * (to - from) + from)
    },
    randomNotId() {
        return [true, false, 0, 254, -5087, true, false, {}, [], new Date, new Array, new Object].random()
    },
    randomId() {
        return ['5fd60bf6f81a4c16e86db546', '5fd60bf6f81a4c16e86db547', '5fd60bf6f81a4c16e86db548', '5fd60bf6f81a4c16e86db549', '5fd60bf6f81a4c16e86db54a', '5fd60bf6f81a4c16e86db54b', '5fd60bf6f81a4c16e86db54c', '5fd60bf6f81a4c16e86db54d', '5fd60bf6f81a4c16e86db54e', '5fd60bf6f81a4c16e86db54f'].random()
    },
    randomNotStringNumber() {
        return [ 3454, true, 2342311, {}, [], new Date, new Array, new Object].random()
    },
    randomNotNumber() {
        return [2,5 , true, false, null, undefined, {}, [], new Date, new Array, new Object].random()
    },
    randomWrongLengthId() {
        return ['5fd60bf6f814a5s4cwf16e86db5', '5fd60bf6f814as4cwf16e86db5', '5fd6bf6f814as4cwf16e86db5', '5fd6bf6f814as4cwf16e86db5f3', '5fd6bf6f814as4cwf16e86db5f3f' ].random()
    },


}