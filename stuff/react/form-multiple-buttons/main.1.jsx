function App() {
    return <MultipleSearch />
}

class MultipleSearch extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return <form onSubmit={event => event.preventDefault()}>
            <input type="text" name="query" onChange={event => this.setState({ query: event.target.value })} />

            <button onClick={() => searchByName(this.state.query)}>by name</button>
            <button onClick={() => searchRandom()}>random</button>
            <button onClick={() => searchByIngredient(this.state.query)}>by ingredient</button>

            {/* <input type="submit" name="name" value="by name" />
        <input type="submit" name="random" value="random" />
        <input type="submit" name="ingredient" value="by ingredient" /> */}
        </form>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

// logic

function searchByName(query) {
    console.log('searching by name', query)
}

function searchRandom() {
    console.log('searching randomly')
}

function searchByIngredient(query) {
    console.log('searching by ingredient', query)
}