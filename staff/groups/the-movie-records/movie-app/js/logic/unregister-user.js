/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {string} token The auth token when credentials are correct (validation in API)
 */

/**
 * Delete user from his token.
 * 
 * @example
 * 
 * unregisterUser("token", "tete@tete.es",function () {});
 * 
 * @param {string} token The token of the user generated when authenticating.
 * @param {string} password The password of the user who wants to register. 
 * @param {function} callback The callback exppression that manage of the unregister.
 * 
 * @throws(TypeError)On type validation error
 * @throws(Error)On content validation error
 * 
 * 
 */

function unregisterUser(token, password, callback) {
  if (typeof token !== "string") throw new TypeError(token + " is not a token");

  if (!token.trim().length) throw new Error(token + " is empty or blank");

  if (typeof password !== "string")
    throw new TypeError(password + " is not a password");

  if (!password.trim().length) throw new Error(password + " is empty or blank");

  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a callback");

  call(
    "DELETE",
    "https://b00tc4mp.herokuapp.com/api/v2/users",
    { Authorization: "Bearer " + token, "Content-type": "application/json" },
    '{ "password": "' + password + '" }',
    function (status, response) {
      if (status === 204) {
        callback(null);
      } else {
        var res = JSON.parse(response);
        callback(new Error(res.error));
      }
    }
  );
}
