/**
 * The callback expression that manages the result provided by calling the movie's and the user's API. 
 * 
 * @callback callback
 * 
 * @param {null} null It provides no response on the API's end 
 * @param {Array} movies It provides the movie's array whenever the result was successful
 */
/**
 * Retrieve the movies that were liked by the user previously
 * 
 * Two calls are made on this function. First one to the user's API to retrieve their properties through token and the second one to the movie's API
 * to get the results of finding a movie id within the 'likes' property array.
 * 
 * 
 * @param {string} token The passed token as first argument to retrieve user's properties
 * @param {callback} callback The callback expression that manages the result of the calls that were made.
 * 
 * @throws {TypeError} On token that is not a string
 * @throws {Error} On emty or blank token
 * @throws {TypeError} On a non function callback
 */
const retrieveLikedMovies = (token, callback) => {
  if (typeof token !== "string") throw new TypeError(token + " is not a token");

  if (!token.trim().length) throw new Error("token is empty or blank");

  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a callback");

  call(
    "GET",
    "https://b00tc4mp.herokuapp.com/api/v2/users",
    { Authorization: `Bearer ${token}` },
    "",
    (status, response) => {
      if (status === 200) {
        const { likes = [] } = JSON.parse(response);

        const movies = [];

        let counter = 0;

        if (likes.length)
          likes.forEach((movieId, index) =>
            call(
              "GET",
              `https://api.themoviedb.org/3/movie/${movieId}?api_key=e187746b7167e4886a5d0a2f1ead5a18`,
              {},
              "",
              (status, response) => {
                if (status === 200) {
                  const movie = JSON.parse(response);

                  movie.like = true;

                  movies[index] = movie;

                  counter++;

                  if (counter === likes.length) callback(null, movies);
                } else callback(new Error("cannot retrieve liked movies :("));
              }
            )
          );
        else callback (null, movies)
      } else callback(new Error("sorry, cannot retrieve liked movies :("));
    }
  );
};
