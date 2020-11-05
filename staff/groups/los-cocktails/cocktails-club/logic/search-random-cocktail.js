function searchRandomCocktail(token, callback) {
  if (typeof callback !== "function")
    throw new Error(callback + " is not a callback");

  call(
    "GET",
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
    {},
    "",
    function (status, response) {
      if (status === 200) {
        var res = JSON.parse(response);
        var results = res.drinks

        call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
          (status, response) => {
            if (status === 200) {
              const { likes = [] } = JSON.parse(response)

              results.forEach(item => item.like = likes.includes(item.idDrink))
              results = results.map(
                ({
                  idDrink: id,
                  strDrink: name,
                  strInstructions: instructions,
                  strInstructionsES: instructionsES,
                  strAlcoholic: alcoholic,
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
              callback(null, results);
            } else callback(new Error('sorry, cannot search :('))
          })
      } else {
        var res = JSON.parse(response);

        callback(new Error(res.error));
      }
    }
  );
}
