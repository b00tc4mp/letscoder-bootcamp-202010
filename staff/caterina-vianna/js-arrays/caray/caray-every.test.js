console.log("TEST Caray.prototype.every()");

(function () {
  console.log(" should return false for lluvia as it doesnt contain letter o");
  var tiempo = new Caray();
  tiempo[0] = "lluvias";
  tiempo[1] = "sol";
  tiempo[2] = "vientos";
  tiempo.length = 3;

  var iterations = 0;

  var result = tiempo.every(function (name) {
    iterations++;
    return name.includes("s");
  });

  console.assert(result === true, "should result be true");
  console.assert(iterations === 3, "should iterations count be 3");
})();

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

(function () {
  console.log(
    " should return true for pilar, aida, marta and caterina, checking they contain the letter a"
  );

  var c = new Caray();
  c[0] = "pilar";
  c[1] = "aida";
  c[2] = "marta";
  c[3] = "caterina";
  c.length = 4;

  var iterations = 0;

  var result = c.every(function (name) {
    iterations++;

    return name.includes("a");
  });

  console.assert(result === true, "should result be true");
  console.assert(iterations === 4, "should iterations count be 4");
})();

(function () {
  console.log(
    " should return false for pilar, aida, marta and caterina, checking they contain the letter i"
  );

  var c = new Caray();
  c[0] = "pilar";
  c[1] = "aida";
  c[2] = "marta";
  c[3] = "caterina";
  c.length = 4;

  var iterations = 0;

  var result = c.every(function (name) {
    iterations++;

    return name.includes("i");
  });

  console.assert(result === false, "should result be false");
  console.assert(iterations === 3, "should iterations count be 3");
})();
