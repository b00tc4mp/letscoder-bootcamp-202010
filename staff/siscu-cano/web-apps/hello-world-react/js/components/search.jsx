function Search(props) {
  return (
    <form
      className="search__form"
      onSubmit={function (event) {
        event.preventDefault();
        var query = event.target.query.value;
        props.onSearch(query);
      }}
    >
      <input className="search__input" type="text" name="query" placeholder="Buscar..." />
      <button className="search__reset" type="reset">
        ✖️
      </button>
      <button className="search__submit" type="submit">
        🔍
      </button>
    </form>
  );
}
