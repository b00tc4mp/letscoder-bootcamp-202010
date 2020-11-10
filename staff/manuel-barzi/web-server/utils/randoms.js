module.exports = {
    randomStringWithPrefix(prefix) { return `${prefix}${Math.random()}`},
    randomWithPrefixAndSuffix(prefix, suffix) { return `${prefix}${Math.random()}${suffix}`}
}