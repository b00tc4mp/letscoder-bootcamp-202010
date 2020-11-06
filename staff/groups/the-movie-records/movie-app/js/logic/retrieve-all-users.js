/**
 *  The callback expression that manages the result of retrieve all users
 *
 * @callback callback
 *
 * @param {Error} error In case a fail is detected on response from API
 * @param {object} response Object containing all users
 */

/**
 * Get all users, it is necessary to have the token.
 *
 * @example
 *
 * retrieveAllUsers(email, password, function(error, response) {
 *      if (error) return console.error(error)
 *
 *      console.log(response)
 * })
 *
 * @param {string} token  The auth token when credentials are correct (validation in API)
 * @param {callback} callback The callback expression that manages the result of retrieve users
 *
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */
function retrieveAllUsers(token, callback) {
  if (typeof token !== "string") throw new TypeError(token + " is not a token");

  if (!token.trim().length) throw new Error("token is empty or blank");

  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a callback");

  call(
    "GET",
    "https://b00tc4mp.herokuapp.com/api/v2/users/all",
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
