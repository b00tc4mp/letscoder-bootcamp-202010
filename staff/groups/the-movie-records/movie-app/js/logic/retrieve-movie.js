function retrieveMovie(id, language, callback) {
  if (typeof callback !== "function")
    throw new TypeError(`${callback} is not a callback`);

  if (typeof id !== "number") throw new TypeError(`${id} is not a number`);

  if (typeof language !== "string")
    throw new TypeError(`${language} is not a string`);
  call(
    "GET",
    `https://api.themoviedb.org/3/movie/${id}?api_key=89997664452db5c88e7700a30ee2c5b9&language=${language}&append_to_response=videos,images`,
    {},
    "",
    function (status, response) {
      if (status === 200) {
        var res = JSON.parse(response);
        callback(null, res);
      } else {
        var res = JSON.parse(response);
        callback(new Error(res.error));
      }
    }
  );
}
