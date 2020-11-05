function Card(props) {
  return (
    <article className="card">
      <header className="card-header">
        <img
          className="card-header__image"
          src={
            props.movie.poster_path
              ? `http://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.movie.poster_path} `
              : "https://tinyurl.com/noimagesfound"
          }
          height="120"
          alt="Api"
        />
      </header>
      <div className="card-body">
        <h4 className="card-body__title">
          {props.movie.original_title} ({props.movie.release_date})
        </h4>
        <p className="card-body__description">{props.movie.overview}</p>
      </div>
    </article>
  );
}
