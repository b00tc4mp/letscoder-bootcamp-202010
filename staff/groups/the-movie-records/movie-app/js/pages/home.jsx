const { Component } = React;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      resultSearch: [],
      searchUsed: false,
      resultMovie: undefined,
      actors: undefined,
    };
  }

  componentWillMount() {
    retrieveNewMovies(1, "es", (error, newMovies) => {
      if (error) return alert(error.message);

      this.setState({ newMovies });
    });
    retrieveUpcomingMovies(1, "es", (error, upcomingMovies) => {
      if (error) return alert(error.message);

      this.setState({ upcomingMovies });
    });
  }

  handleGoHome = () => {
    this.setState({
      searchUsed: false,
      resultMovie: undefined,
      actors: undefined,
    });
  };

  handleResult = (resultSearch, query) => {
    this.setState({
      resultSearch,
      searchUsed: true,
      resultMovie: undefined,
      actors: undefined,
      query,
    });
  };

  handleSearchMovies = (query) => {
    const { token } = sessionStorage;
    try {
      searchMovies(token, query, 1, "es", (error, movies) => {
        if (error) return alert(error.message);
        this.setState({ resultSearch: movies });
      });
    } catch ({ message }) {
      alert(message);
    }
  };

  handleGoToMovie = (movieId) => {
    const { token } = sessionStorage;
    retrieveMovie(token, movieId, "es", (error, movie) => {
      if (error) return alert(error.message);
      retrieveActors(movieId, (error, actors) => {
        if (error) return alert(error.message);
        this.setState({ resultMovie: movie, actors });
      });
    });
  };

  handleLike = (movieId) => {
    const { token } = sessionStorage;

    toggleLikeMovie(token, movieId, (error) => {
      if (error) return alert(error.message);

      const {
        state: { resultMovie },
      } = this;

      if (resultMovie) this.handleGoToMovie(movieId);
      else this.handleSearchMovies(this.state.query);
    });
  };

  handleClickDetail = (id) => {
    const { token } = sessionStorage;
    retrieveMovie(token, id, "es", (error, movie) => {
      if (error) return alert(error.message);
      retrieveActors(id, (error, actors) => {
        if (error) return alert(error.message);
        this.setState({ resultMovie: movie, actors });
      });
    });
  };

  renderResult() {
    return this.state.resultSearch.results.length === 0 ? (
      <NoResult />
    ) : (
      <>
        {!this.state.resultMovie && (
          <ResultList
            onList={this.handleResult}
            onItem={this.handleClickDetail}
            onLike={this.handleLike}
            movies={this.state.resultSearch.results}
          />
        )}
        {this.state.resultMovie && this.renderDetail()}
      </>
    );
  }
  renderDetail() {
    return (
      <Detail
        item={this.state.resultMovie}
        actors={this.state.actors}
        onLike={this.handleLike}
      />
    );
  }
  renderSlider() {
    return (
      <>
        {!this.state.resultMovie && this.state.newMovies && (
          <Slider
            title="Cartelera de cine"
            items={this.state.newMovies}
            onItem={this.handleClickDetail}
          />
        )}
        {!this.state.resultMovie && this.state.upcomingMovies && (
          <Slider
            title="Novedades"
            items={this.state.upcomingMovies}
            onItem={this.handleClickDetail}
          />
        )}
        {this.state.resultMovie && this.renderDetail()}
      </>
    );
  }

  render() {
    return (
      <>
        <Discover />
        <Search onResult={this.handleResult} />

        {this.state.searchUsed ? this.renderResult() : this.renderSlider()}
      </>
    );
  }
}
