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
        let actorsFiltered = undefined;

        if (actors && actors.cast && actors.cast.length) {
          actorsFiltered = actors.cast.map(
            ({ character, name, profile_path }) => {
              return { character, name, image: profile_path };
            }
          );
        }
        callback(null, actorsFiltered);
      } else {
        var res = JSON.parse(response);
        callback(new Error(res.error));
      }
    }
  );
}
