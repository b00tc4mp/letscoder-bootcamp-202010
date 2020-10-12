/**
 * The reduce() method executes a reducer function (that you provide) 
 * on each element of the array, resulting in single output value.
 */

// var reduced = (accumulator, currentValue) => newAcumulator


var languages = [
    {name: 'spanish', flag: '🇪🇸', people: 5},
    {name: 'french', flag: '🇫🇷', people: 12},
    {name: 'german', flag: '🇩🇪', people: 32},
    {name: 'italian', flag: '🇮🇹', people: 2},
    {name: 'japanese', flag: '🇯🇵', people: 13}
];

var totalPeople = languages.reduce(function(acc, language) {
    return acc + language.people;}, 0);
