console.log("TEST Caray.prototype.every()");

(function () {
  console.log(" should return true because all strings contains @");

  var emails = new Caray();
  emails[0] = "vianna@gmail.com";
  emails[1] = "berto@hotmail.com";
  emails[2] = "hello@hotmail.com";
  emails.length = 3;

  var iterations = 0;
  var result = emails.every(function (email) {
    iterations++;
    return email.includes("@");
  });

  console.assert(result === true, "result should be true");
  console.assert(iterations === 3, "iterations should be 3");
})();
