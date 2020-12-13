require('./array-polyfills')

module.exports = {
    randomStringWithPrefix(prefix) { return `${prefix}${Math.random()}` },
    randomWithPrefixAndSuffix(prefix, suffix) { return `${prefix}${Math.random()}${suffix}` },
    randomNonString() {
        return [1, true, null, undefined, {}, [], function () { }, new Date].random()
    },
    randomEmptyOrBlankString() { return ['', ' ', '\t', '\r', '\n'].random() }
}