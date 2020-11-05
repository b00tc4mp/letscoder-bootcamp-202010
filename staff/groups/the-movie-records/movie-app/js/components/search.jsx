const { Component } = React;

class Search extends Component {
  constructor() {
    super();
    this.state = { query: "" };
  }
  __handleSubmit = (event) => {
    const { onResult } = this.props;
    const { query } = this.state;
    const { token } = sessionStorage;
    event.preventDefault();
    searchMovies(token, this.state.query, 1, "es", function (error, movies) {
      movies && onResult(movies, query);
    });
  };
  __handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <>
        <div className="search">
          <form className="search-content" onSubmit={this.__handleSubmit}>
            <input
              onChange={this.__handleChange}
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
