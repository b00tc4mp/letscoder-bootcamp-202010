const { Component } = React

class Home extends Component {

    constructor(){
        super()

        this.state = {}
    }
    
    componentWillMount = () => {
        const { token } = sessionStorage

        retrieveUser(token, (error, user) => {
            if (error) return alert(error.message)

            this.setState({ user })
        })
    }

    handleSearchByName = query => {
        searchByName(query, (error, results) => {
            if (error) return alert(error.message)
            
            this.setState({ results })
        })
    }

    handleSearchRandomCocktail = () => {
        searchRandomCocktail( (error, results) => {
            if (error) return alert(error.message)
            
            this.setState({ results })
        })
    }

    handleSearchByIngredient = query => {
        searchByIngredient(query, (error, results) => {
            if (error) return alert(error.message)
            
            this.setState({ results })
        })
    }

    
    
    render() {
        const {state: { results, user } , handleSearchByIngredient, handleSearchByName, handleSearchRandomCocktail } = this

        return <>
            { user &&  <Welcome user={ user } />}

            <SearchByName onSearch={handleSearchByName} />

            <SearchRandomCocktail onSearch={handleSearchRandomCocktail} />

            <SearchByIngredient onSearch={handleSearchByIngredient} />

            { results  && <Results items={results} />}


        </>
    }

}