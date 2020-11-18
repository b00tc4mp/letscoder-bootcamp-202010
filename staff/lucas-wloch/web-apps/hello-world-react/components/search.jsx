function Search(props){
    return <form onSubmit={ function(event){
        event.preventDefault()

        var query = event.target.query.value

        props.onSearch(query)
    }}>
        <input name="query" type="text"/>
        <button type="reset">✖️</button>
        <button type="submit">🔍</button>
    </form>
}