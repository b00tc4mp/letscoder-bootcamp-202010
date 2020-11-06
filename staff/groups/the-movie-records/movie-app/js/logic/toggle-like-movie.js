/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * 
 */

/**
 * Get toggle like movies.
 * 
 * @example
 * 
 * 
 * 
 * @param {string} token The token of the user generated when authenticating.
 * @param {number} movieID  The movieId of the movies generated for the Api. 
 * @param {function} callback The callback exppression that manage of the toggle-like-movie.
 * 
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 * 
 * 
 */


const toggleLikeMovie = (token, movieId, callback) => {
  if (typeof token !== "string") throw new TypeError(token + " is not a token");

  if (!token.trim().length) throw new Error("token is empty or blank");

  if (typeof movieId !== "number")
    throw new TypeError(movieId + " is not a movieId");

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

        const index = likes.indexOf(movieId);

        if (index > -1) likes.splice(index, 1);
        else likes.push(movieId);

        call(
          "PATCH",
          "https://b00tc4mp.herokuapp.com/api/v2/users/",
          {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
          JSON.stringify({ likes }),
          (status, response) => {
            if (status === 204) callback(null);
            else {
              var response = JSON.parse(this.responseText);

              callback(new Error(response.error));
            }
          }
        );
      } else {
        const { error } = JSON.parse(response);

        callback(new Error(error));
      }
    }
  );
};
