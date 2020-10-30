function Search({ onSearch }) {
    return <form onSubmit={function(event) {
        event.preventDefault()

        var query = event.target.query.value

        onSearch(query)
    }}>
        <input type="text" name="query"/>
        <button type="reset">✖️</button>
        <button type="submit">🔍</button>
    </form>
}