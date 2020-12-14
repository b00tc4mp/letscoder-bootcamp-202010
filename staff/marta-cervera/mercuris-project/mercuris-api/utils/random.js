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

    randomInteger(from, to) {  
        return Math.round(Math.random() * (to - from) + from)
    },
    randomNotId() {
        return [true, false, 0, 254, -5087, true, false, {}, [], new Date, new Array, new Object].random()
    },
    randomId() {
        return ['', '5fd60bf6f81a4c16e86db547', '5fd60bf6f81a4c16e86db548', '5fd60bf6f81a4c16e86db549', '5fd60bf6f81a4c16e86db54a', '5fd60bf6f81a4c16e86db54b', '5fd60bf6f81a4c16e86db54c', '5fd60bf6f81a4c16e86db54d', '5fd60bf6f81a4c16e86db54e', '5fd60bf6f81a4c16e86db54f', '5fd60bf6f81a4c16e86db550', '5fd60bf6f81a4c16e86db551', '5fd60bf6f81a4c16e86db552', '5fd60bf6f81a4c16e86db553', '5fd60bf6f81a4c16e86db554'].random()
    },
    randomNotNumber() {
        return ['qwerty', 'asdfg', true, false, null, undefined, {}, [], new Date, new Array, new Object].random()
    },

}