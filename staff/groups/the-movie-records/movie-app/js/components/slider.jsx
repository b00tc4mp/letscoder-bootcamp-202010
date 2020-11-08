function Slider(props) {
  const { movies, title, onItem } = props;

  return (
    <div className="u-box">
      <h1>{title}</h1>
      <div className="scrollable-carousel">
        {movies &&
          movies.map(({ id, image }, index) => {
            return (
              <div
                key={`${id}${index}`}
                onClick={() => onItem(id)}
                className="scrollable-carousel__item"
              >
                <img src={`https://image.tmdb.org/t/p/w185/${image}`}></img>
              </div>
            );
          })}
      </div>
    </div>
  );
}
