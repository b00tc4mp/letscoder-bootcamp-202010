function ResultList(props) {
  const { movies, onItem, onLike } = props;
  return (
    <section className="u-p-h-20">
      <ul className="u-grid">
        {movies.map((movie) => (
          <li
            className="u-grid__item"
            onClick={() => onItem(movie.id)}
            key={movie.id}
          >
            {
              <div
                className={`heart ${movie.like ? "active" : ""}`}
                onClick={(event) => {
                  event.stopPropagation();
                  movie.like
                    ? event.target.classList.add("active")
                    : event.target.classList.remove("active");
                  onLike(movie.id);
                }}
              />
            }
            <Card movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}
