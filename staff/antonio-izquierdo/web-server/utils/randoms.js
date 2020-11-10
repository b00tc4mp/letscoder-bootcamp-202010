require('./array-pollyfills')

module.exports = {
    randomStringWithPrefix(prefix) { return `${prefix}${Math.random()}` },
    randomWithPrefixAndSuffix(prefix, sufix) { return `${prefix}${Math.random()}${sufix}` },
    randomNonString() {
        return [1, true, null, undefined, {}, [], function () { }, new Date].random()
    },
    randomNonFunction() {
        return [1, true, null, undefined, {}, [], '', ' ', new Date].random()
    },
    randomEmptyOrBlankString() { return ['', ' ', '\t', '\r', '\n'].random() }
}