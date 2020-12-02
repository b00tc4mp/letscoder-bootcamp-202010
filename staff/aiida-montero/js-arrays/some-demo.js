var movies = [
    {name: 'Intouchables', country: 'France'},
    {name: 'Das Boot', country: 'Germany'},
    {name: 'Adú', country: 'Spain'},
    {name: 'Dangal', country: 'India'},
    {name: 'El hoyo', country: 'Spain'},
    {name: 'Amelie', country: 'France'}
 ]
 
 var someFunction = function some(arr, callback) {
  
    for (var i = 0; i < arr.length; i++) {
   
        if (callback(arr[i])) {
 
          return true
        }
     } 
     return false
 }
 
 function isSpanishMovie(movie) {
 debugger
 
    if (movie.country === 'Spain') {
       return true
    } else {
 
     return false
 }
 }
 
 someFunction(movies, isSpanishMovie)