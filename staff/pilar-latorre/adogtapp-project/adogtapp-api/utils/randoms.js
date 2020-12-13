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
        return ['4kr605f4f8v234c13ep6db55','1vr5k5f4f8v2pwe137p6db55','2zr605f4f8v364k13ep6db55','5fd60bf6f81a4c16e86db551','7vdp0bf6f81a4c168z6db551','3vdp01f6f81a4u125w6db331'].random()
    },
}