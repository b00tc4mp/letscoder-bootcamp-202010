const retrieveLikedMovies = (token, callback) => {
  if (typeof token !== "string") throw new TypeError(token + " is not a token");

  if (!token.trim().length) throw new Error("token is empty or blank");

  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a callback");

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

        if (likes.length)
          likes.forEach((movieId, index) =>
            call(
              "GET",
              `https://api.themoviedb.org/3/movie/${movieId}?api_key=e187746b7167e4886a5d0a2f1ead5a18`,
              {},
              "",
              (status, response) => {
                if (status === 200) {
                  const movie = JSON.parse(response);

                  movie.like = true;

                  movies[index] = movie;

                  counter++;

                  if (counter === likes.length) callback(null, movies);
                } else callback(new Error("cannot retrieve liked movies :("));
              }
            )
          );
        else callback (null, movies)
      } else callback(new Error("sorry, cannot retrieve liked movies :("));
    }
  );
};
