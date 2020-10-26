/**
 * The every() method tests whether all elements in the 
 * array pass the test implemented by the provided function. 
 * It returns a Boolean value.
 */

/* var languages = [
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

*/

var languages = [
    {name: 'spanish', flag: '🇪🇸', eu: true},
    {name: 'french', flag: '🇫🇷', eu: true},
    {name: 'german', flag: '🇩🇪', eu: true},
    {name: 'italian', flag: '🇮🇹', eu: true},
    {name: 'japanese', flag: '🇯🇵', eu: false},
];

function every(callback, arr) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');
    
    for (var i = 0; i < arr.length; i++ ) {
    
        if(!callback(arr[i])) {
          return false;
        }  
        
      }
    return true;
}      

function isFromEurope(european) {

    
    if (european.eu === true) {

        return true;

    } else {

       return false;
    }

}

every(isFromEurope, languages);







    
    

