function unregisterUser(password, token, callback) {
<<<<<<< HEAD
    if (typeof token !== "string")
      throw new TypeError(token + " is not a string");
    if (!token.trim().length) throw new Error("token is empty or blank");
    if (typeof callback !== "function")
      throw new TypeError(callback + " is not a callback");
    if (typeof password !== "string")
      throw new TypeError(password + "is not a string");
    if (!password.trim().length) throw new Error("password is empty or blank");
  
    call(
      "DELETE",
      "https://b00tc4mp.herokuapp.com/api/v2/users",
      { "Content-type": "application/json", Authorization: "Bearer " + token },
      {"password": "${password}"},
      function (status, response) {
        if (status === 204) callback(null);
        else {
          var res = JSON.parse(response);
  
          callback(new Error(res.error));
        }
      }
    );
  }
=======
  if (typeof token !== "string")
    throw new TypeError(token + " is not a string");
  if (!token.trim().length) throw new Error("token is empty or blank");
  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a callback");
  if (typeof password !== "string")
    throw new TypeError(password + "is not a string");
  if (!password.trim().length) throw new Error("password is empty or blank");

  call(
    "DELETE",
    "https://b00tc4mp.herokuapp.com/api/v2/users",
    { "Content-type": "application/json", Authorization: "Bearer " + token },
    `{"password": "${password}"}`,
    function (status, response) {
      if (status === 204) callback(null);
      else {
        var res = JSON.parse(response);

        callback(new Error(res.error));
      }
    }
  );
}
>>>>>>> b9cb068fbe37e85b6b7932ead657f2e01b3779d2
