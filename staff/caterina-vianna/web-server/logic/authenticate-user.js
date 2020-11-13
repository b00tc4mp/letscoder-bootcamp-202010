const fs = require("fs");

//const authenticateUser = (email, password, callback) => {
module.exports = (email, password, callback) => {
  // TODO validate all arguments
  if (typeof email !== "string") throw new TypeError(`${email} is not a email`);

  if (!email.trim().length) throw new Error("email is empty or blank");

  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  )
    throw new Error("invalid e-mail");

  if (typeof password !== "string")
    throw new TypeError(password + " is not a password");

  if (!password.trim().length) throw new Error("password is empty or blank");
  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a callback");

  fs.readdir("./data/users", (error, files) => {
    if (error) return callback(error);

    (function check(files, index = 0) {
      if (index < files.length) {
        debugger;
        const file = files[index];

        fs.readFile(`./data/users/${file}`, "utf8", (error, json) => {
          if (error) return console.error(error);

          const { id, email: _email, password: _password } = JSON.parse(json);

          if (email === _email && password === _password) callback(null, id);
          else check(files, ++index);
        });
      } else callback(new Error("wrong credentials"));
    })(files);
  });
};

//module.exports = authenticateUser
