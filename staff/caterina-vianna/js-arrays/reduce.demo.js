/**
 * The reduce() method executes a reducer function (that you provide) 
 * on each element of the array, resulting in single output value.
 */

// var reduced = (accumulator, currentValue) => newAcumulator

var languages = [
    {
        name: 'spanish', 
        flag: '🇪🇸', 
        people: 5
    },

    {   name: 'french', 
        flag: '🇫🇷', 
        people: 12
    },
    {
        name: 'german', 
        flag: '🇩🇪', 
        people: 32 
    },
    {
        name: 'italian', 
        flag: '🇮🇹', 
        people: 0
    },
    {
        name: 'japanese', 
        flag: '🇯🇵', 
        people: 13
    }
];

var totalName = languages.reduce(function(accumulator, language) {
    if (language.name) {
        return accumulator + language.name;
    } else {
        return accumulator;
    }
     
},0);

    console.log(totalName);