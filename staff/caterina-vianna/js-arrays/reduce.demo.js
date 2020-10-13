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

var totalPeople = languages.reduce(function(accumulator, language) {
    if (language.people > 0) {
        return accumulator + language.people;
    } else {
        return accumulator;
    }
     
}, 0);

    console.log(totalPeople);