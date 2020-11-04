function retrieveMovie(token, id, language, callback) {
    if (typeof callback !== "function")
    throw new TypeError(`${callback} is not a callback`);

    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

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
        var movie = JSON.parse(response);
        console.log(movie)
        if (movie)
                    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
                        (status, response) => {
                            if (status === 200) {
                                const { likes = [] } = JSON.parse(response)

                                movie.like = likes.includes(movie.id)

                                callback(null, movie)
                            }
                        })
                else callback(null, movie)
      } else {
        var res = JSON.parse(response);
        callback(new Error(res.error));
      }
    }
  );
}
