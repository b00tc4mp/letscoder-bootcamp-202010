require('./array-polyfills')

module.exports = {
    randomEmptyOrBlankString() {
        return ['', ' ', '\t', '\r', '\n'].random()
    },

    randomGameConsole() {
        return ['game boy', 'game boy advance', 'game boy color', 'nintendo ds', 'nintendo 3ds', 'nintendo switch', 'wii', 'wii u', 'play station 1', 'play station 2', 'play station 3', 'play station 4', 'play station 5', 'xbox', 'xbox 360', 'xbox one'].random()
    },

    randomId() {
        return ['5fd60bf6f81a4c16e86db546', '5fd60bf6f81a4c16e86db547', '5fd60bf6f81a4c16e86db548', '5fd60bf6f81a4c16e86db549', '7vdp0bf6f81a4c168z6db551', '5fd60bf6f81a4c16e86db54a', '5fd60bf6f81a4c16e86db54b', '5fd60bf6f81a4c16e86db54c', '5fd60bf6f81a4c16e86db54d', '5fd60bf6f81a4c16e86db54e', '5fd60bf6f81a4c16e86db54f', '5fd60bf6f81a4c16e86db550', '5fd60bf6f81a4c16e86db551', '5fd60bf6f81a4c16e86db552', '5fd60bf6f81a4c16e86db553', '5fd60bf6f81a4c16e86db554'].random()
    },
    
    randomInteger(from, to) {  // 1, 10
        return Math.round(Math.random() * (to - from) + from)
    },

    randomNotId() {
        return [true, false, 0, 254, -5087, true, false, {}, [], new Date, new Array, new Object].random()
    },

    randomNotNumber() {
        return ['qwerty', 'asdfg', true, false, null, undefined, {}, [], new Date, new Array, new Object].random()
    },

    randomNonString() {
        return [1, -50, true, null, undefined, {}, [], new Date, new Array, new Object].random()
    },

    randomStringNumber(from, to) {  // 1, 10
        return Math.round(Math.random() * (to - from) + from)
    },

    randomStringWithPrefix(prefix) {
        return `${prefix}${Math.random()}`
    },

    randomWithPrefixAndSuffix(prefix, suffix) {
        return `${prefix}${Math.random()}${suffix}`
    },

    randomWrongLengthId() {
        return ['5fd60bf6f814a5s4cwf16e86db5', '5fd60bf6f814as4cwf16e86db5', '5fd6bf6f814as4cwf16e86db5', '5fd6bf6f814as4cwf16e86db5f3', '5fd6bf6f814as4cwf16e86db5f3f' ].random()
    }
}

/* randomInteger(from, to) {  // 1, 10
    return Math.round(Math.random() * (to - from) + from)
}


TAMBIÉN SE USA PARA NUMEROS NEGATIVOS

*/

/* Example of RANDOM INTEGER
describe('when user doesn\'t have notes', () => {
            let text, tags, visibility

            beforeEach(() => {
                text = randomStringWithPrefix('text')
                tags = new Array(randomInteger(-1, -150))

                visibility = ['public', 'private'].random()
            })
*/