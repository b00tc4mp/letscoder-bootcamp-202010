/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API.
 * @param {objet} movies Get the movie in the search .
 */

/**
 * Delete user from his token.
 * 
 * @example
 * 
 *
 * 
 * @param {string} token The token of the user generated when authenticating.
 * @param {string} query Parameter necessary to do the search.
 * @param {number} page  Get the page where you want to search
 * @param {string} language Get the language of the language in which you want to display the search. 
 * @param {function} callback The callback exppression that manage of the unregister.
 * 
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 * 
 * 
 */

function searchMovies(token, query, page, language, callback) {
  if (typeof token !== "string") throw new TypeError(token + " is not a token");

  if (!token.trim().length) throw new Error("token is empty or blank");

  if (typeof query !== "string")
    throw new TypeError(`${query} 'is not a string`);

  if (!query.trim().length) throw new Error("query is empry or blank");

  if (typeof callback !== "function")
    throw new TypeError(`${callback} is not a callback`);

  if (typeof page !== "number") throw new TypeError(`${page} is not a number`);

  if (typeof language !== "string")
    throw new TypeError(`${language} is not a string`);

  call(
    "GET",
    `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&language=${language}&api_key=89997664452db5c88e7700a30ee2c5b9`,
    {},
    "",
    function (status, response) {
      if (status === 200) {
        var movies = JSON.parse(response);

        call(
          "GET",
          "https://b00tc4mp.herokuapp.com/api/v2/users",
          { Authorization: `Bearer ${token}` },
          "",
          (status, response) => {
            if (status === 200) {
              const { likes = [] } = JSON.parse(response);

              movies.results.forEach(
                (movie) => (movie.like = likes.includes(movie.id))
              );

              callback(null, movies);
            }
          }
        );
      } else {
        var res = JSON.parse(response);
        callback(new Error(res.error));
      }
    }
  );
}
