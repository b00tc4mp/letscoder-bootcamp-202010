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
        if(query)
        searchByName(token, query , (error, results) => {
            if (error) return this.setState({ error: error.message })
            
            this.setState({ results, query })
        })
        else {
            const {state: {query}} = this
            searchByName(token, query , (error, results) => {
                if (error) return this.setState({ error: error.message })
                
                this.setState({ results, query })
            })
        }
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
        if (query)
        searchByIngredient( token , query, (error, results) => {
            if (error) return this.setState({ error: error.message })
            
            this.setState({ results, query })
        })
        else{
            const {state: {query}} = this
            searchByIngredient( token , query, (error, results) => {
                if (error) return this.setState({ error: error.message })
                
                this.setState({ results, query })
            })
        }
    }

    handleGoToHome = () => {
        this.setState({ results: null, error: null })
    }

    handleLike = (id) => {
        const { token } = sessionStorage
        toggleLike(token,id, error => {
            if (error) return this.setState({ error: error.message })
            this.handleSearchByName(this.state.query)
        })
    }

    handleShowFavourites = () => {
        console.log('favourites')
        const { token } = sessionStorage
        retrieveLikes(token, (error,results) =>{
            if (error) this.setState({ error: error.message })
            this.setState({ results })
        })
    }

    
    
    render() {
        const {state: { results, user, error },handleShowFavourites, handleLike ,handleGoToHome, handleSearchByIngredient, handleSearchByName, handleSearchRandomCocktail } = this

        return <>
            <Logo onHome={handleGoToHome} />

            { user &&  <Welcome user={ user } />}

            <button onClick={handleShowFavourites} >Favourites</button>

            <SearchByName onSearch={handleSearchByName} />

            <SearchRandomCocktail onSearch={handleSearchRandomCocktail} />

            <SearchByIngredient onSearch={handleSearchByIngredient} />

            <Search onSearchByName={handleSearchByName} onSearchByIngredient={handleSearchByIngredient} onSearchRandom={handleSearchRandomCocktail} />

            {error && <Feedback error={error} color="white" />}

            { results  && results.length && <Results items={results} onLike={handleLike} />}


        </>
    }

}