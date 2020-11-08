/**
 *  The callback expression that manages the result of retrieve actors
 *
 * @callback callback
 *
 * @param {Error} error In case a fail is detected on response from API
 * @param {object} actorsFiltered Object that contains all the actors, already filtered by fields
 *
 */

/**
 * Get all the actors involved in a movie
 *
 * @example
 *
 * retrieveActors(id, function(error) {
 *      if (error) return console.error(error)
 *      console.log(actorsFiltered)
 * })
 *
 * @param {number} id The movie ID needed to get the data
 * @param {callback} callback The callback expression that manages the result of retrieve users
 * @throws {TypeError} On type validation error
 */
function retrieveActors(id, callback) {
  if (typeof id !== "number") throw new TypeError(`${id} is not a number`);
  if (typeof callback !== "function")
    throw new TypeError(`${callback} is not a callback`);

  call(
    "GET",
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=89997664452db5c88e7700a30ee2c5b9`,
    {},
    "",
    function (status, response) {
      if (status === 200) {
        let actors = JSON.parse(response);

        // Evitamos que el destructuring sea null o undefined para que no devuleva error
        //en ese caso devolvería undefined
        const { cast } = actors || {};
        const actorsFiltered = cast.map(
          ({ character, name, profile_path }) => ({
            character,
            name,
            image: profile_path,
          })
        );

        callback(null, actorsFiltered);
      } else {
        var res = JSON.parse(response);
        callback(new Error(res.error));
      }
    }
  );
}
