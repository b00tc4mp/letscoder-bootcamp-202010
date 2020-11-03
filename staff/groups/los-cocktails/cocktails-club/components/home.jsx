const { Component } = React

class Home extends Component {

    constructor(){
        super()

        this.state = { }
    }
    
<<<<<<< HEAD

    handleSearchByName = (query) => {
        searchByName(query, (error, results) => {
            if (error) return alert(error.message)
            
            this.setState({ results })
        })
=======
    handleSearchByName = query => {
        searchByName(query, (error, results) => {
            if (error) return alert(error.message)

            this.setState({ results })
        } )
>>>>>>> b9cb068fbe37e85b6b7932ead657f2e01b3779d2
    }
    
    
    render() {
        const { props: { user, token }, state: { results } , handleSearchByName } = this

        return <>
            <Welcome user={ user } />

            <SearchByName onSearch={handleSearchByName} />

            { results  && <Results items={results} />}


        </>
    }

}