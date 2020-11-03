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
    
    
    render() {
        const { props: { user, token }, state: { results } , handleSearchByName } = this

        return <>
            <Welcome user={ user } />

            <SearchByName onSearch={handleSearchByName} />

            { results  && <Results items={results} />}


        </>
    }

}