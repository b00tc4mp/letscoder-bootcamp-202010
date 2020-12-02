let number = [40,30,55,60];

let older18 = number.every( function(num) { return num > 18;
});
console.log (older18);

//

var languages = [
    {name: 'spanish', flag: '🇪🇸', eu: true},
    {name: 'french', flag: '🇫🇷', eu: true},
    {name: 'german', flag: '🇩🇪', eu: true},
    {name: 'italian', flag: '🇮🇹', eu: true},
    {name: 'japanese', flag: '🇯🇵', eu: false},
];
    
var isEuropeanCountry = languages.every(function (language) {language.eu});

    console.log('Are all european?', isEuropeanCountry);