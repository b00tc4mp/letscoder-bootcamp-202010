const { Component } = React;

class Search extends Component {
  constructor() {
    super();
    this.state = { query: "" };
  }
  handleSubmit = (event) => {
    const { onResult } = this.props;
    const { query } = this.state;
    const { token } = sessionStorage;
    event.preventDefault();
    searchMovies(token, query, 1, "es", function (error, movies) {
      if (error) return alert(error.message);
      movies && onResult(movies, query);
    });
  };
  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <>
        <div className="search">
          <form className="search-content" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              className="search-content__input"
              placeholder="¿Qué película quieres buscar?"
            />
            <button type="submit" className="search-content__submit">
              <i className="search-content__icon fa fa-search"></i>
            </button>
          </form>
        </div>
      </>
    );
  }
}
