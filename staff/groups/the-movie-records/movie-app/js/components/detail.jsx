function Detail(props) {
  const videoId =
    props.item &&
    props.item.videos &&
    props.item.videos.results[0] &&
    props.item.videos.results[0].key;

  let squareStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
      props.item.backdrop_path || props.item.poster_path
    })`,
  };

  return (
    <div className="movie">
      <div className="movie__info" style={squareStyle}>
        <h1 className="movie__title">{props.item.original_title}</h1>
        {props.item.tagline && (
          <p className="movie__tagline">"{props.item.tagline}"</p>
        )}
        <div className="movie__detail">
          <div
            className="movie__poster"
            data-title={props.item.original_title}
            data-description={
              props.item.overview && props.item.overview.truncate(80)
            }
          >
            <img
              src={
                props.item.poster_path
                  ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.item.poster_path}`
                  : "https://oij.org/wp-content/uploads/2016/05/placeholder.png"
              }
              alt="Meat"
              width="300"
            />
          </div>
          <div className="movie__overview">
            {props.item.overview}
            {props.item.homepage && (
              <p className="movie__moreinfo">
                Más información:
                <a href={props.item.homepage} target="_blank">
                  {props.item.homepage}
                </a>
              </p>
            )}
            {props.item.release_date && (
              <p className="movie__language">
                Fecha: {props.item.release_date}
              </p>
            )}
            {props.item.runtime && (
              <p className="movie__language">Duración: {props.item.runtime}</p>
            )}
            {props.item.original_language && (
              <p className="movie__language">
                Idioma original: {props.item.original_language.toUpperCase()}
              </p>
            )}
            {props.item.imdb_id && (
              <a
                className="movie__imdb"
                href={`https://www.imdb.com/title/${props.item.imdb_id}`}
                target="_blank"
              >
                <img src="https://tinyurl.com/imdblogo" alt="Imdb" />
              </a>
            )}
          </div>
          {
            <div
              className={`heart ${props.item.like ? "active" : ""}`}
              onClick={(event) => {
                props.item.like
                  ? event.target.classList.add("active")
                  : event.target.classList.remove("active");
                props.onLike(props.item.id);
              }}
            />
          }
        </div>
      </div>
      <dir className="movie__actors">
        {props.actors &&
          props.actors.length &&
          props.actors.map((actor) => (
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
          ))}
      </dir>
      {videoId && (
        <div className="movie__trailer">
          <div className="video-wrap">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?controls=0`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
