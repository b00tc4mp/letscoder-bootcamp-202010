function ResultList(props) {
  console.log(props);

  return (
    <section className="u-p-h-20">
      <ul className="u-grid-items">
        {props.movies.map((movie) => (
          <li onClick={() => props.onItem(movie.id)}>
            <Card movie={movie} key={movie.id} />
          </li>
        ))}
      </ul>
    </section>
  );
}
