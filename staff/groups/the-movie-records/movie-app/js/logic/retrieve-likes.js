const retrieveLikes = (token, callback) => {
  if (typeof token !== "string") throw new TypeError(token + " is not a token");

  if (!token.trim().length) throw new Error("token is empty or blank");

  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a callback");
  console.log(token);
  call(
    "GET",
    "https://b00tc4mp.herokuapp.com/api/v2/users",
    { Authorization: `Bearer ${token}` },
    "",
    (status, response) => {
      if (status === 200) {
        const { likes = [] } = JSON.parse(response);

        const movies = [];

        let counter = 0;
        console.log(likes);
        if (likes.length)
          likes.forEach((movieId, index) =>
            call(
              "GET",
              `https://api.themoviedb.org/3/movie/${movieId}?api_key=89997664452db5c88e7700a30ee2c5b9&language=es&append_to_response=videos,images`,
              {},
              "",
              (status, response) => {
                if (status === 200) {
                  const movie = JSON.parse(response);

                  movie.like = true;

                  movies[index] = movie;

                  counter++;
                  console.log("COUNTER:", counter);
                  console.log("LENGTH:", likes.length);
                  if (counter === likes.length) callback(null, movies);
                } else callback(new Error("cannot retrieve liked movies :("));
              }
            )
          );
        else callback(null, movies);
      } else callback(new Error("sorry, cannot retrieve liked movies :("));
    }
  );
};
