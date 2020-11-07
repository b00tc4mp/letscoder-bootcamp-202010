function Slider(props) {
  const { items, title, onItem } = props;
  //TODo logica
  let posters =
    items &&
    items.results &&
    items.results.map(({ id, poster_path: image }) => {
      return { id, image };
    });

  return (
    <div className="u-box">
      <h1>{title}</h1>
      <div className="scrollable-carousel">
        {posters &&
          posters.map((poster, index) => {
            return (
              <div
                key={`${poster.id}-${poster.index}`}
                onClick={() => onItem(poster.id)}
                className="scrollable-carousel__item"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w185/${poster.image}`}
                ></img>
              </div>
            );
          })}
      </div>
    </div>
  );
}
