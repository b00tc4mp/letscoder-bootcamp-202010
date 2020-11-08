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
    const { handleResult, handleClickDetail, handleLike, renderDetail } = this;

    const { resultSearch, resultMovie } = this.state;

    return resultSearch.results.length === 0 ? (
      <NoResult />
    ) : (
      <>
        {!resultMovie && (
          <ResultList
            onList={handleResult}
            onItem={handleClickDetail}
            onLike={handleLike}
            movies={resultSearch.results}
          />
        )}
        {resultMovie && renderDetail()}
      </>
    );
  }
  renderDetail = () => {
    const { handleLike } = this;
    const { resultMovie, actors } = this.state;
    return <Detail item={resultMovie} actors={actors} onLike={handleLike} />;
  };

  renderSlider() {
    const { handleClickDetail, renderDetail } = this;
    const { resultMovie, newMovies, upcomingMovies } = this.state;
    return (
      <>
        {!resultMovie && newMovies && (
          <Slider
            title="Cartelera de cine"
            movies={newMovies}
            onItem={handleClickDetail}
          />
        )}
        {!resultMovie && upcomingMovies && (
          <Slider
            title="Novedades"
            movies={upcomingMovies}
            onItem={handleClickDetail}
          />
        )}
        {resultMovie && renderDetail()}
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
