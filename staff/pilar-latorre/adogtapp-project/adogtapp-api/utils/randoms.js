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
        return ['5fd75cd28ddd23102c234000','5fd75cd28ddd23102c230000','5fd75cd28ddd23102c200000','5fd75cd28ddd23102c000000','5fd75cd28dd023102c200000'].random()
    },
}