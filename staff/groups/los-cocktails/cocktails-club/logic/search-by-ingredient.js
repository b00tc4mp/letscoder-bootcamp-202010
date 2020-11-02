function searchByIngredient(name, callback) {
  if (typeof name !== "string")
    throw new TypeError(name + " is not an ingredient");
  if (!name.trim().length) throw new Error("ingredient name is empty or blank");
  if (typeof callback !== "function")
    throw new Error(callback + " is not a callback");

  call(
    "GET",
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`,
    {},
    "",
    function (status, response) {
      if (status === 200) {
        if (response.length === 0)
          return callback(new Error("no ingredient found"));
        var results = JSON.parse(response);
        callback(null, results);
      } else {
        var res = JSON.parse(response);

        callback(new Error(res.error));
      }
    }
  );
}
