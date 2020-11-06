/**
 *  The callback expression that manages the result of retrieve all users
 *
 * @callback callback
 *
 * @param {Error} error In case a fail is detected on response from API.
 * @param {object} response Object that contains data of a user from the id.
 */

/**
 * Get another user , it is necessary to have the token.
 *
 * @example
 * retrieveAnotherUser(
  "token,
  "id",
  function (error, user) {
    console.log("DEMO retriveUser()");

    if (error) console.error(error);
    else console.dir(user);
  }
);
 *
 * @param {string} token  The auth token when credentials are correct (validation in API)
 * @param {id} id The id obtained from the api.
 * @param {function} callback The callback expression that manages the result of retrieve users
 *
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */

function retrieveAnotherUser(token, id, callback) {
  if (typeof token !== "string") throw new TypeError(token + " is not a token");

  if (!token.trim().length) throw new Error("token is empty or blank");

  if (typeof id !== "string") throw new TypeError(id + " is not a id");

  if (!id.trim().length) throw new Error("id is empty or blank");

  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a callback");

  call(
    "GET",
    "https://b00tc4mp.herokuapp.com/api/v2/users/" + id,
    { Authorization: "Bearer " + token },
    undefined,
    function (status, response) {
      if (status === 200) {
        var res = JSON.parse(response);
        callback(null, res);
      } else {
        var res = JSON.parse(response);
        callback(new Error(res.error));
      }
    }
  );
}
