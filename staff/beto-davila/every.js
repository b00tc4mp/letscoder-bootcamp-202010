/**
 * The every() method tests whether all elements in the 
 * array pass the test implemented by the provided function. 
 * It returns a Boolean value.
 */

var languages = [
    {name: 'spanish', flag: '🇪🇸', eu: true},
    {name: 'french', flag: '🇫🇷', eu: true},
    {name: 'german', flag: '🇩🇪', eu: true},
    {name: 'italian', flag: '🇮🇹', eu: true},
    {name: 'japanese', flag: '🇯🇵', eu: false},
];
    
var isEuropeanCountry = languages.every(function(language) {
    language.eu
});

    console.log('Are all european?', isEuropeanCountry);




    
    

