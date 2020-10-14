/**
 * The some() method tests whether at least one element in the 
 * array passes the test implemented by the provided function.
 * It returns Boolean when first positive match is found.
 */


 /*
var movies = [
    {name: 'Intouchables', country: 'France'},
    {name: 'Das Boot', country: 'Germany'},
    {name: 'Adú', country: 'Spain'},
    {name: 'Dangal', country: 'India'},
    {name: 'El hoyo', country: 'Spain'},
    {name: 'Amelie', country: 'France'}
]

var spanishMovies = movies.some(function(movie) {
   if (movie.country !== 'Spain') {
           return false;
   }
})

   console.log('All Spanish movies', spanishMovies);

*/

var movies = [
   {name: 'Intouchables', country: 'France'},
   {name: 'Das Boot', country: 'Germany'},
   {name: 'Adú', country: 'Spain'},
   {name: 'Dangal', country: 'India'},
   {name: 'El hoyo', country: 'Spain'},
   {name: 'Amelie', country: 'France'}
]

var someFunction = function some(arr, callback) {

   if (typeof callback !== 'function') throw new TypeError(callback + ' is not a Function.');
   if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');
    
   for (var i = 0; i < arr.length; i++) {
  
       if (callback(arr[i])) {

         return true
       }
    } 
    return false
}

function isSpanishMovie(movie) {


   if (movie.country === 'Spain') {
      return true
   } else {

    return false
   }
}

someFunction(movies, isSpanishMovie)