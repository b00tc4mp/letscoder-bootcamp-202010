/**
 *  The callback expression that manages the API's error and results
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {Array} results An array that contains the results info / or empty array if no results were found
 */
/**
 * looks for cocktails that match the the name given.
 * 
 * 
 * @example
 * 
 * searchByName(token, name, function(error, results) {
 *      if (error) return console.log(error.message)
 * 
 *    console.log(results)
 * })
 * 
 * @param {string} token The authentication token required by the users API
 * @param {string} name The name of the cocktail
 * @param {callback} callback The callback expression that manages the error and results given by the cocktails API
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 * @throws {Error} When API does not find results
 */

function searchByName(token,name, callback) {
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
        var res = JSON.parse(response);
        var results = res.drinks;
        if (results === null) callback(new Error("Sorry, no results found"), null);
        else {

          call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
              (status, response) => {
                  if (status === 200) {
                      const { likes = [] } = JSON.parse(response)

                      results.forEach( item => item.like = likes.includes(item.idDrink) )
                      results = results.map(
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
                      callback(null, results);
                  } else callback(new Error('sorry, cannot search :('))
              })
        }
      } else {
        var res = JSON.parse(response);

        callback(new Error(res.error));
      }
    }
  );
}