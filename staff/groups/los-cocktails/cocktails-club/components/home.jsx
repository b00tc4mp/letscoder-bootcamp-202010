const { Component } = React

class Home extends Component {

    constructor(){
        super()

        this.state = {}
    }
    
    componentWillMount = () => {
        const { token } = sessionStorage

        retrieveUser(token, (error, user) => {
            if (error) return this.setState({ error: error.message })

            this.setState({ user })
        })
    }

    handleSearchByName = query => {
        const { token } = sessionStorage
        searchByName(token, query, (error, results) => {
            if (error) return this.setState({ error: error.message })
            
            this.setState({ results })
        })
    }

    handleSearchRandomCocktail = () => {
        const { token } = sessionStorage
        searchRandomCocktail( token, (error, results) => {
            if (error) return this.setState({ error: error.message })
            
            this.setState({ results })
        })
    }

    handleSearchByIngredient = query => {
        const { token } = sessionStorage
        searchByIngredient( query, (error, results) => {
            if (error) return this.setState({ error: error.message })
            
            this.setState({ results })
        })
    }

    handleGoToHome = () => {
        this.setState({ results: null })
    }

    
    
    render() {
        const {state: { results, user, error } ,handleGoToHome, handleSearchByIngredient, handleSearchByName, handleSearchRandomCocktail } = this

        return <>
            <Logo onHome={handleGoToHome} />

            { user &&  <Welcome user={ user } />}

            <SearchByName onSearch={handleSearchByName} />

            <SearchRandomCocktail onSearch={handleSearchRandomCocktail} />

            <SearchByIngredient onSearch={handleSearchByIngredient} />

            <Search onSearchByName={handleSearchByName} onSearchByIngredient={handleSearchByIngredient} onSearchRandom={handleSearchRandomCocktail} />

            {error && <Feedback error={error} />}

            { results  && <Results items={results} />}


        </>
    }

}