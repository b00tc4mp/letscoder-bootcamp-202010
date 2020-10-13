/**
 * The some() method tests whether at least one element in the 
 * array passes the test implemented by the provided function.
 * It returns Boolean when first positive match is found.
 */

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