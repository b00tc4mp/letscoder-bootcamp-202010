const { Component } = React;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      resultSearch: [],
      searchUsed: false,
      movieID: 0,
      resultMovie: 0,
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

  handleResult = (resultSearch) => {
    this.setState({
      resultSearch,
      searchUsed: true,
      resultMovie: {},
      movieID: 0,
    });
  };

  handleClickDetail = (id) => {
    retrieveMovie(id, "es", (error, movie) => {
      if (error) return alert(error.message);
      this.setState({ movieID: id, resultMovie: movie });
    });
  };

  renderResult() {
    return this.state.resultSearch.results.length === 0 ? (
      <NoResult />
    ) : (
      <>
        {!this.state.resultMovie.id && (
          <ResultList
            onList={this.handleResult}
            onItem={this.handleClickDetail}
            movies={this.state.resultSearch.results}
          />
        )}
        {this.state.resultMovie.id && <Detail items={this.state.resultMovie} />}
      </>
    );
  }

  renderSlider() {
    return (
      <>
        {this.state.newMovies && (
          <Slider title="Cartelera de cine" items={this.state.newMovies} />
        )}
        {this.state.upcomingMovies && (
          <Slider title="Novedades" items={this.state.upcomingMovies} />
        )}
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
