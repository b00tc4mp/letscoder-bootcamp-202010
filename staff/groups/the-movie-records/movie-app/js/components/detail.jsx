function Detail(props) {
  console.log("PROPS", props);

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
    <div class="movie">
      <div class="movie__info" style={squareStyle}>
        <h1 class="movie__title">{props.items.original_title}</h1>
        <div class="movie__detail">
          <div
            class="movie__poster"
            data-title={props.items.original_title}
            data-description={props.items.overview}
          >
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.items.poster_path}`}
              alt="Meat"
              width="300"
            />
          </div>
          <div>{props.items.overview}</div>
        </div>
      </div>

      <div class="movie__trailer">
        <div class="video-wrap">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?controls=0`}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
