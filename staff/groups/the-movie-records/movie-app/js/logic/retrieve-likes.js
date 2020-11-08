/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 *
 * @param {Error} error In case a fail is detected on response from API.
 * @param {object} movies Returns the likes of the movies that we have marked.
 */

/**
 * Get likes of the movies.
 *
 * @example
 *
 * @param {function} callback The callback exppression that manage of the unregister.
 * @param {string} token The token of the user generated when authenticating.
 *
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 *
 *
 */
const retrieveLikes = (token, callback) => {
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
              `https://api.themoviedb.org/3/movie/${movieId}?api_key=89997664452db5c88e7700a30ee2c5b9&language=es&append_to_response=videos,images`,
              {},
              "",
              (status, response) => {
                if (status === 200) {
                  let movie = JSON.parse(response);

                  // Evitamos que el destructuring sea null o undefined para que no devuleva error
                  //en ese caso devolvería undefined
                  const {
                    id,
                    poster_path,
                    original_title,
                    release_date,
                    overview,
                  } = movie || {};

                  movie = {
                    id,
                    poster_path,
                    original_title,
                    release_date,
                    overview,
                  };

                  movie.like = true;

                  movies[index] = movie;

                  counter++;
                  if (counter === likes.length) callback(null, movies);
                } else callback(new Error("cannot retrieve liked movies :("));
              }
            )
          );
        else callback(null, movies);
      } else callback(new Error("sorry, cannot retrieve liked movies :("));
    }
  );
};
