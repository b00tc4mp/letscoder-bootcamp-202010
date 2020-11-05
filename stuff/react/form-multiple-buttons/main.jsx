function App() {
    return <MultipleSearch />
}

function MultipleSearch() {
    let query

    return <form onSubmit={event => event.preventDefault()}>
        <input type="text" name="query" onChange={event => query = event.target.value} />

        <button onClick={() => searchByName(query)}>by name</button>
        <button onClick={() => searchRandom()}>random</button>
        <button onClick={() => searchByIngredient(query)}>by ingredient</button>
    </form>
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