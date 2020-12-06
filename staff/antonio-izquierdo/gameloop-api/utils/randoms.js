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

    randomGameConsole() {
        return ['game boy', 'game boy advance', 'game boy color', 'nintendo ds', 'nintendo 3ds', 'nintendo switch', 'wii', 'wii u', 'play station 1', 'play station 2', 'play station 3', 'play station 4', 'play station 5', 'xbox', 'xbox 360', 'xbox one'].random()
    },

    randomNotNumber() {
        return ['qerwtqrerqwq','', true, null, undefined, {}, [], function () { }, new Date].random()
    },

    randomNegativeNumber() {
        return [-1523233, '-45322', -263, '-7', '-32121223243', -925, -63443256376274 ].random()
    }
}

/* Example of RANDOM INTEGER
describe('when user doesn\'t have notes', () => {
            let text, tags, visibility

            beforeEach(() => {
                text = randomStringWithPrefix('text')
                tags = new Array(randomInteger(10, 100))

                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                visibility = ['public', 'private'].random()
            })
*/