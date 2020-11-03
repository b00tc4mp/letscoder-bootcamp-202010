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

  __handleResult = (resultSearch) => {
    this.setState({
      resultSearch,
      searchUsed: true,
      resultMovie: {},
      movieID: 0,
    });
  };

  __handleClickDetail = (id) => {
    retrieveMovie(id, "es", (error, movie) => {
      if (error) return alert(error.message);
      this.setState({ movieID: id, resultMovie: movie });
    });
  };

  __renderResult() {
    return this.state.resultSearch.results.length === 0 ? (
      <NoResult />
    ) : (
      <>
        <ResultList
          onList={this.__handleResult}
          onItem={this.__handleClickDetail}
          movies={this.state.resultSearch.results}
        />
        <Detail items={this.state.resultMovie} />
      </>
    );
  }

  __renderSlider() {
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
        <Search onResult={this.__handleResult} />

        {this.state.searchUsed ? this.__renderResult() : this.__renderSlider()}
      </>
    );
  }
}
