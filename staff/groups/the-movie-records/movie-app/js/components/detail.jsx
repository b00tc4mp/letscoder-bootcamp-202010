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
          <div className="movie__overview">{props.item.overview}</div>
          {
            <button
              onClick={(event) => {
                event.stopPropagation();

                props.onLike(props.item.id);
              }}
            >
              {props.item.like ? "❤️" : "♡"}
            </button>
          }
        </div>
      </div>
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
