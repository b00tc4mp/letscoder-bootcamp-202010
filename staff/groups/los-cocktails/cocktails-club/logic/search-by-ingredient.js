
/**
 *  The callback expression that manages the API's error and results
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {Array} results An array that contains the results info / or empty array if no results were found
 */
/**
 * looks for cocktails that contain the ingredient given.
 * 
 * 
 * @example
 * 
 * searchByIngredient(token, name, function(error, results) {
 *      if (error) return console.log(error.message)
 * 
 *    console.log(results)
 * })
 * 
 * @param {string} token The authentication token required by the users API
 * @param {string} name The name of the ingredient 
 * @param {callback} callback The callback expression that manages the error and results given by the cocktails API
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 * @throws {Error} When API does not find results
 */
function searchByIngredient(token, name, callback) {
  if (typeof name !== "string")
    throw new TypeError(name + " is not an ingredient");
  if (!name.trim().length) throw new Error("ingredient name is empty or blank");
  if (typeof callback !== "function")
    throw new Error(callback + " is not a callback");
  var results = []
  var counter = 0
  call(
    "GET",
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`,
    {},
    "",
    function (status, response) {
      if (status === 200) {
        if (response.length === 0)
          return callback(new Error("no ingredient found"));

        var res = JSON.parse(response);
        var drinks = res.drinks
        var drinkIds = []
        drinks.forEach(({ idDrink }) => drinkIds.push(idDrink))

        call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
          (status, response) => {
            if (status === 200) {
              const { likes = [] } = JSON.parse(response)

              if (drinkIds.length)
                drinkIds.forEach((id, index) => {

                  call('GET', `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, {}, '',
                    (status, response) => {
                      if (status === 200) {

                        if (response === '') {
                          counter = counter + 1
                        } else {
                          var res = JSON.parse(response)
                          var drinks = res.drinks
                          drinks.forEach(item => item.like = likes.includes(item.idDrink))
                          drinks = drinks.map(
                            ({
                              like,
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
                              like,
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

                          results[index] = drinks[0]
                          counter = counter + 1
                          // results.length++

                          if (drinkIds.length === counter) {
                            callback(null, results)

                          }
                        }
                      }

                    })
                }
                )
              else callback(null, results)
            }
          })

        // callback(null, results);
      } else {
        var res = JSON.parse(response);

        callback(new Error(res.error));
      }
    }
  );
}



