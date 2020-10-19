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
