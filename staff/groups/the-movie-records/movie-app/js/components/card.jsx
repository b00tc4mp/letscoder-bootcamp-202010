function Card(props) {
  const { poster_path, original_title, release_date, overview } = props.movie;
  return (
    <article className="card">
      <header className="card-header">
        <img
          className="card-header__image"
          src={
            poster_path
              ? `http://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path} `
              : "https://tinyurl.com/noimagesfound"
          }
          height="120"
          alt="Api"
        />
      </header>
      <div className="card-body">
        <h4 className="card-body__title">
          {original_title} ({release_date})
        </h4>
        <p className="card-body__description">{overview}</p>
      </div>
    </article>
  );
}
