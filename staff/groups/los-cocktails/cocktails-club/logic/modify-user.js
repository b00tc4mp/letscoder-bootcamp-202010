function modifyUser(changes, token, callback) {
    if (typeof changes !== "object")
      throw new TypeError(changes + " is not an object");
    if (typeof token !== "string")
      throw new TypeError(token + " is not a string");
    if (!token.trim().length) throw new Error("token is empty or blank");
    if (typeof callback !== "function")
      throw new TypeError(callback + " is not a callback");
  
    call(
      "PATCH",
      "https://b00tc4mp.herokuapp.com/api/v2/users",
      { "Content-type": "application/json" },
      `${changes}`,
      function (status, response) {
        if (status === 204) callback(null);
        else {
          var res = JSON.parse(response);
  
          callback(new Error(res.error));
        }
      }
    );
  }