function searchMovies(token, query, page, language, callback) {
  if (typeof token !== "string") throw new TypeError(token + " is not a token");

  if (!token.trim().length) throw new Error("token is empty or blank");

  if (typeof query !== "string")
    throw new TypeError(`${query} 'is not a string`);

  if (!query.trim().length) throw new Error("query is empry or blank");

  if (typeof callback !== "function")
    throw new TypeError(`${callback} is not a callback`);

  if (typeof page !== "number") throw new TypeError(`${page} is not a number`);

  if (typeof language !== "string")
    throw new TypeError(`${language} is not a string`);

  call(
    "GET",
    `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&language=${language}&api_key=89997664452db5c88e7700a30ee2c5b9`,
    {},
    "",
    function (status, response) {
      if (status === 200) {
        var movies = JSON.parse(response);

        call(
          "GET",
          "https://b00tc4mp.herokuapp.com/api/v2/users",
          { Authorization: `Bearer ${token}` },
          "",
          (status, response) => {
            if (status === 200) {
              const { likes = [] } = JSON.parse(response);

              movies.results.forEach(
                (movie) => (movie.like = likes.includes(movie.id))
              );

              callback(null, movies);
            }
          }
        );
      } else {
        var res = JSON.parse(response);
        callback(new Error(res.error));
      }
    }
  );
}
