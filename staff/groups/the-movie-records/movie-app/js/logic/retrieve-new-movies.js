/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 *
 * @param {Error} error In case a fail is detected on response from API.
 * @param {object} response Returns the content of the aPI movies.
 */

/**
 * Get retrieve new movies.
 *
 * @example
 *
 *
 *
 *
 * @param {function} callback The callback exppression that manage of the unregister.
 * @param {number} page  Get the page where you want to search.
 * @param {string} language Get the language of the language in which you want to display the search.
 * @param {string} token The token of the user generated when authenticating.
 *
 *
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 *
 *
 */
function retrieveNewMovies(page, language, callback) {
  if (typeof callback !== "function")
    throw new TypeError(`${callback} is not a callback`);

  if (typeof page !== "number") throw new TypeError(`${page} is not a number`);

  if (typeof language !== "string")
    throw new TypeError(`${language} is not a string`);
  call(
    "GET",
    `https://api.themoviedb.org/3/movie/now_playing?page=${page}&language=${language}&api_key=89997664452db5c88e7700a30ee2c5b9`,
    {},
    "",
    function (status, response) {
      if (status === 200) {
        var movies = JSON.parse(response);

        const { results } = movies || [];
        const moviesFiltered = results.map(({ id, poster_path: image }) => ({
          id,
          image,
        }));

        callback(null, moviesFiltered);
      } else {
        var movies = JSON.parse(response);
        callback(new Error(movies.error));
      }
    }
  );
}
