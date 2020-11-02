function Search() {
  return (
    <div className="search">
      <div className="search-content">
        <input
          type="text"
          className="search-content__input"
          placeholder="¿Qué película quieres buscar?"
        />
        <button type="submit" className="search-content__submit">
          <i className="search-content__icon fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
