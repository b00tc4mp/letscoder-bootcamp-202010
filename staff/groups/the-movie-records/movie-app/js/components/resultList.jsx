function ResultList(props) {
  return (
    <section className="u-p-h-20">
      <ul className="u-grid">
        {props.movies.map((movie) => (
          <li
            className="u-grid__item"
            onClick={() => props.onItem(movie.id)}
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
                  props.onLike(movie.id);
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
