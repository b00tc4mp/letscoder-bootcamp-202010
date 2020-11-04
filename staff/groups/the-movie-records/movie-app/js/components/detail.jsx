function Detail(props) {
  const videoId =
    props.items &&
    props.items.videos &&
    props.items.videos.results[0] &&
    props.items.videos.results[0].key;

  let squareStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
      props.items.backdrop_path || props.items.poster_path
    })`,
  };
  return (
    <div className="movie">
      <div className="movie__info" style={squareStyle}>
        <h1 className="movie__title">{props.items.original_title}</h1>
        <div className="movie__detail">
          <div
            className="movie__poster"
            data-title={props.items.original_title}
            data-description={props.items.overview}
          >
            <img
              src={
                props.items.poster_path
                  ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.items.poster_path}`
                  : "https://oij.org/wp-content/uploads/2016/05/placeholder.png"
              }
              alt="Meat"
              width="300"
            />
          </div>
          <div>{props.items.overview}</div>
        </div>
      </div>

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
    </div>
  );
}
