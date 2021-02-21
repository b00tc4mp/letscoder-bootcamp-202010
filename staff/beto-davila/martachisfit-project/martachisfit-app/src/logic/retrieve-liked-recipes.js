import call from '../utils/call'
import context from './context'
import { validateCallback, validateToken } from './helpers/validations'

/**
 * The callback expression that manages the result provided by calling the diet's and the user's API. 
 * 
 * @callback callback
 * 
 * @param {null} null It provides no response on the API's end 
 * @param {Array} movies It provides the movie's array whenever the result was successful
 */
/**
 * Retrieve the recipes that were liked by the user previously
 * 
 * Two calls are made on this function. First one to the user's API to retrieve their properties through token and the second one to the diet's endpoint
 * to get the results of finding a recipe id within the 'likes' property array.
 * 
 * 
 * @param {string} token The passed token as first argument to retrieve user's properties
 * @param {callback} callback The callback expression that manages the result of the calls that were made.
 * 
 * @throws {TypeError} On token that is not a string
 * @throws {Error} On emty or blank token
 * @throws {TypeError} On a non function callback
 */
export default (function (token, callback) {
  validateCallback(callback)
  validateToken(token)

  const { API_URL } = this

  call(
    "GET",
    `${API_URL}/users`,
    { Authorization: `Bearer ${token}` },
    "",
    (status, response) => {
      if (status === 200) {
        const { savedRecipes = [] } = JSON.parse(response);

        const likedRecipes = [];

        let counter = 0;

        if (savedRecipes.length)
          savedRecipes.forEach((recipeId, index) =>
            call(
              "GET",
              `${API_URL}/recipes/${recipeId}`,
              {},
              null,
              (status, response) => {
                if (status === 200) {
                  const recipe = JSON.parse(response);

                  recipe.like = true;

                  likedRecipes[index] = recipe;

                  counter++;

                  if (counter === savedRecipes.length) callback(null, likedRecipes);
                } else callback(new Error("cannot retrieve liked recipes :("));
              }
            )
          );
        else callback(null, likedRecipes)
      } else callback(new Error("sorry, cannot retrieve liked recipes :("));
    }
  );
}).bind(context)