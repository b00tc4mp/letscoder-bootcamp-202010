function searchRandomCocktail(callback) {
  if (typeof callback !== "function")
    throw new Error(callback + " is not a callback");

  call(
    "GET",
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
    {},
    "",
    function (status, response) {
      if (status === 200) {
        var results = JSON.parse(response);
        callback(null, results);
      } else {
        var res = JSON.parse(response);

        callback(new Error(res.error));
      }
    }
  );
}
