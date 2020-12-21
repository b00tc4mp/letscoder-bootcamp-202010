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
    randomTime() {
        hrs = Math.round(Math.random()*12);
        mins = Math.round(Math.random()*60);    
        const hFormat = (hrs<10 ? "0" : "");
        const mFormat = (mins<10 ? "0" : "");
        return String(hFormat+hrs+ ":" +mFormat+mins);
      }
}