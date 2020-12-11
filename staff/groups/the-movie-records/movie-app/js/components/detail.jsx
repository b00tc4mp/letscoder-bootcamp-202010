function Detail(props) {
  const {
    id,
    videoIDyoutube,
    backdrop_path,
    poster_path,
    original_title,
    tagline,
    overview,
    homepage,
    release_date,
    runtime,
    original_language,
    imdb_id,
    like,
  } = props.item;

  const { actors, onLike } = props;

  let squareStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
      backdrop_path || poster_path
    })`,
  };

  return (
    <div className="movie">
      <div className="movie__info" style={squareStyle}>
        <h1 className="movie__title">{original_title}</h1>
        {tagline && <p className="movie__tagline">"{tagline}"</p>}
        <div className="movie__detail">
          <div
            className="movie__poster"
            data-title={original_title}
            data-description={overview && overview.truncate(80)}
          >
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`
                  : "https://oij.org/wp-content/uploads/2016/05/placeholder.png"
              }
              alt="Meat"
              width="300"
            />
          </div>
          <div className="movie__overview">
            {overview}
            {homepage && (
              <p className="movie__moreinfo">
                Más información:
                <a href={homepage} target="_blank">
                  {homepage}
                </a>
              </p>
            )}
            {release_date && (
              <p className="movie__language">Fecha: {release_date}</p>
            )}
            {runtime && <p className="movie__language">Duración: {runtime}</p>}
            {original_language && (
              <p className="movie__language">
                Idioma original: {original_language.toUpperCase()}
              </p>
            )}
            {imdb_id && (
              <a
                className="movie__imdb"
                href={`https://www.imdb.com/title/${imdb_id}`}
                target="_blank"
              >
                <img src="https://tinyurl.com/imdblogo" alt="Imdb" />
              </a>
            )}
          </div>
          {
            <div
              className={`heart ${like ? "active" : ""}`}
              onClick={(event) => {
                like
                  ? event.target.classList.add("active")
                  : event.target.classList.remove("active");
                onLike(id);
              }}
            />
          }
        </div>
      </div>
      <dir className="movie__actors">
        <Slider title="Actores" movies={actors} />
        {/* {actors &&
          actors.length &&
          actors.map((actor) => (
            <figure className="wave" key={`${actor.name}${actor.character}`}>
              <img
                src={
                  actor.image
                    ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${actor.image}`
                    : "https://tinyurl.com/avatardefault"
                }
                alt={actor.character}
              />
              <figcaption>{actor.name}</figcaption>
            </figure>
          ))} */}
      </dir>
      {videoIDyoutube && (
        <div className="movie__trailer">
          <div className="video-wrap">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoIDyoutube}?controls=0`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
