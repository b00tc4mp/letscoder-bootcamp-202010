const { Component } = React

class Home extends Component {

    constructor(){
        super()

        this.state = { }
    }
    

    handleSearchByName = (query) => {
        searchByName(query, (error, results) => {
            if (error) return alert(error.message)
            
            this.setState({ results })
        })
    }

    handleSearchRandomCocktail = () => {
        searchRandomCocktail((error,results) => {
            if (error) return alert(error.message)
            
            this.setState({ results })
        })
    }
    
    
    render() {
        const { props: { user, token }, state: { results } , handleSearchByName, handleSearchRandomCocktail } = this

        return <>
            <Welcome user={ user } />

            <SearchByName onSearch={handleSearchByName} />

            <SearchRandomCocktail onSearch={handleSearchRandomCocktail} />

            { results  && <Results items={results} />}


        </>
    }

}