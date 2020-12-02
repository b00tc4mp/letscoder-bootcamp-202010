var languages = [
    {name: 'spanish', flag: '🇪🇸', eu: true},
    {name: 'french', flag: '🇫🇷', eu: true},
    {name: 'german', flag: '🇩🇪', eu: true},
    {name: 'italian', flag: '🇮🇹', eu: true},
    {name: 'japanese', flag: '🇯🇵', eu: true},
];

function isFromEurope(element) {
    debugger
    if (element.eu === true) {
        return true
    } else {
       return false 
    }

}

var EveryFunction = function every(callback, arr) {
    
    for (var i = 0; i < arr.length; i++ ) {
    
        if(!callback(arr[i])) {
          return false
        }  
        
      }
    return true
}      

EveryFunction(isFromEurope, languages)