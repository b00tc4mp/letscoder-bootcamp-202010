const { Component } = React;

class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount = () => {
    const { token } = sessionStorage;

    retrieveUser(token, (error, user) => {
      if (error) return this.setState({ error: error.message });

      this.setState({ user });
    });
  };

  handleSearchByName = (query) => {
    const { token } = sessionStorage;
    if (query)
      searchByName(token, query, (error, results) => {
        if (error) return this.setState({ error: error.message });

        this.setState({ results, query, search: "name", error: null });
      });
    else {
      const {
        state: { query },
      } = this;
      searchByName(token, query, (error, results) => {
        if (error) return this.setState({ error: error.message });

        this.setState({ results, query, search: "name", error: null });
      });
    }
  };

  handleSearchRandomCocktail = () => {
    const { token } = sessionStorage;
    searchRandomCocktail(token, (error, results) => {
      if (error) return this.setState({ error: error.message });

      this.setState({ results, error: null, search: "random" });
    });
  };

  handleSearchByIngredient = (query) => {
    const { token } = sessionStorage;
    if (query)
      searchByIngredient(token, query, (error, results) => {
        if (error) return this.setState({ error: error.message });

        this.setState({ results, query, search: "ingredient", error: null });
      });
    else {
      const {
        state: { query },
      } = this;
      searchByIngredient(token, query, (error, results) => {
        if (error) return this.setState({ error: error.message });

        this.setState({ results, query, search: "ingredient", error: null });
      });
    }
  };

  handleGoToHome = () => {
    this.setState({ results: null, error: null });
  };

  handleLike = (id) => {
    const { token } = sessionStorage;
    const {state: {search, query}} = this
    toggleLike(token, id, (error) => {
      if (error) return this.setState({ error: error.message });
      if (search === "name")
        this.handleSearchByName(query);
      if (search === "ingredient")
        this.handleSearchByIngredient(query);
      if (search === "favourites") this.handleShowFavourites();
      if (search === "random")
        searchById(token, id, (error, results) => {
          if (error) return this.setState({ error: error.message });
          this.setState({ results });
        });
    });
  };

  handleShowFavourites = () => {
    const { token } = sessionStorage;
    retrieveLikes(token, (error, results) => {
      if (error) this.setState({ error: error.message });
      this.setState({ results, search: "favourites", error: null });
    });
  };

  render() {
    const {
      state: { results, user, error },
      handleShowFavourites,
      handleLike,
      handleGoToHome,
      handleSearchByIngredient,
      handleSearchByName,
      handleSearchRandomCocktail,
    } = this;

    return (
      <>
        <Logo onHome={handleGoToHome} />

        {user && <Welcome user={user} />}

        {/* <SearchByName onSearch={handleSearchByName} />

            <SearchRandomCocktail onSearch={handleSearchRandomCocktail} />

            <SearchByIngredient onSearch={handleSearchByIngredient} /> */}

        <Search
          onSearchByName={handleSearchByName}
          onSearchByIngredient={handleSearchByIngredient}
          onSearchRandom={handleSearchRandomCocktail}
        />
        <button onClick={handleShowFavourites} className="favourites">
          💖
        </button>
        {error && <Feedback error={error} color="white" />}
        {results && results.length && (
          <Results items={results} onLike={handleLike} />
        )} 
      </>
    );
  }
}
