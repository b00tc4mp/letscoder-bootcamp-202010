/**
 *  The callback expression that manages the result of the registration user
 *
 * @callback callback
 *
 * @param {Error} error In case a fail is detected on response from API
 */

/**
 * Register a new user.
 *
 * @example
 *
 * registerUser(fullname, email, password, repassword, function(error) {
 *      if (error) return console.error(error)
 * })
 *
 * @param {string} fullname The name of the user who wants to register
 * @param {string} email The email of the user who wants to register
 * @param {string} password The string of the user who wants to register
 * @param {string} repasssword The repassword of the user who wants to register
 * @param {callback} callback The callback expression that manages the result of the registration
 *
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */
function registerUser(fullname, email, password, repassword, callback) {
  if (typeof fullname !== "string")
    throw new TypeError(fullname + " is not a full name");

  if (!fullname.trim().length) throw new Error("full name is empty or blank");

  if (typeof email !== "string")
    throw new TypeError(email + " is not an e-mail");

  if (!email.trim().length) throw new Error("e-mail is empty or blank");

  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  )
    throw new Error("invalid e-mail");

  if (typeof password !== "string")
    throw new TypeError(password + " is not a password");

  if (!password.trim().length) throw new Error("password is empty or blank");

  if (typeof repassword !== "string")
    throw new TypeError(repassword + " is not a password repeat");

  if (!repassword.trim().length)
    throw new Error("password repeat is empty or blank");

  if (password !== repassword) throw new Error("passwords don't match");

  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a callback");

  call(
    "POST",
    "https://b00tc4mp.herokuapp.com/api/v2/users",
    { "Content-type": "application/json" },
    '{ "fullname": "' +
      fullname +
      '", "username": "' +
      email +
      '", "password": "' +
      password +
      '" }',
    function (status, response) {
      if (status === 201) callback(null);
      else {
        var res = JSON.parse(response);

        callback(new Error(res.error));
      }
    }
  );
}
