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
 * @param {string} language Get the language of the language in which you want to display the search.
 * @param {id} id The id obtained from the api.
 * @param {string} token The token of the user generated when authenticating.
 *
 *
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 *
 *
 */

function retrieveMovie(token, id, language, callback) {
  if (typeof callback !== "function")
    throw new TypeError(`${callback} is not a callback`);

  if (typeof token !== "string") throw new TypeError(token + " is not a token");

  if (!token.trim().length) throw new Error("token is empty or blank");

  if (typeof id !== "number") throw new TypeError(`${id} is not a number`);

  if (typeof language !== "string")
    throw new TypeError(`${language} is not a string`);
  call(
    "GET",
    `https://api.themoviedb.org/3/movie/${id}?api_key=89997664452db5c88e7700a30ee2c5b9&language=${language}&append_to_response=videos,images`,
    {},
    "",
    function (status, response) {
      if (status === 200) {
        let movie = JSON.parse(response);
        let videoIDyoutube = null;

        const {
          id,
          videos,
          backdrop_path,
          poster_path,
          original_title,
          tagline,
          overview,
          homepage,
          release_date,
          runtime,
          original_language,
          imdb_id,
          like,
        } = movie || {};

        if (videos && videos.results && videos.results.length) {
          const {
            results: [{ key }],
          } = videos;
          videoIDyoutube = key;
        }

        const movieFiltered = {
          id,
          videoIDyoutube,
          backdrop_path,
          poster_path,
          original_title,
          tagline,
          overview,
          homepage,
          release_date,
          runtime,
          original_language,
          imdb_id,
          like,
        };

        if (movieFiltered)
          call(
            "GET",
            "https://b00tc4mp.herokuapp.com/api/v2/users",
            { Authorization: `Bearer ${token}` },
            "",
            (status, response) => {
              if (status === 200) {
                const { likes = [] } = JSON.parse(response);

                movieFiltered.like = likes.includes(movieFiltered.id);

                callback(null, movieFiltered);
              }
            }
          );
        else callback(null, movieFiltered);
      } else {
        var res = JSON.parse(response);
        callback(new Error(res.error));
      }
    }
  );
}
