function ResultList(props) {
  return (
    <section className="u-p-h-20">
      <ul className="u-grid-items">
        {props.movies.map((movie) => (
          <li onClick={() => props.onItem(movie.id)} key={movie.id}>
            {
              <button
                className="result-like"
                onClick={(event) => {
                  event.stopPropagation();
                  debugger;
                  props.onLike(movie.id);
                }}
              >
                {movie.like ? "❤️" : "♡"}
              </button>
            }
            <Card movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}
