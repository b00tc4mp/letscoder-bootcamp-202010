function searchByName(name, callback) {
  if (typeof name !== "string")
    throw new TypeError(name + " is not a cocktail");
  if (!name.trim().length) throw new Error("cocktail name is empty or blank");
  if (typeof callback !== "function")
    throw new Error(callback + " is not a callback");

  call(
    "GET",
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    {},
    "",
    function (status, response) {
      if (status === 200) {
        var response = JSON.parse(response);
        var results = response.drinks;
        if (results === null) callback(new Error("Sorry, no results found"));
        else {
          results = results.map(
            ({
              idDrink: id,
              strDrink: name,
              strInstructions: instructions,
              strInstructionsES: instructionsES,
              strAcoholic: alcoholic,
              strGlass: glass,
              strDrinkThumb: image,
              strIngredient1: ing1,
              strIngredient2: ing2,
              strIngredient3: ing3,
              strIngredient4: ing4,
              strIngredient5: ing5,
              strIngredient6: ing6,
              strIngredient7: ing7,
              strMeasure1: m1,
              strMeasure2: m2,
              strMeasure3: m3,
              strMeasure4: m4,
              strMeasure5: m5,
              strMeasure6: m6,
              strMeasure7: m7,
            }) => ({
              id,
              name,
              instructions,
              instructionsES,
              alcoholic,
              glass,
              image,
              ing1,
              ing2,
              ing3,
              ing4,
              ing5,
              ing6,
              ing7,
              m1,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
            })
          );
          //destructuring del item
          callback(null, results);
        }
      } else {
        var response = JSON.parse(response);

        callback(new Error(res.error));
      }
    }
  );
}
