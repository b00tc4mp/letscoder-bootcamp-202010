function Search(props) {
    return <form onSubmit={function(e) {

        //submit general behavior
        e.preventDefault();
        var query = e.target.query.value;
        props.onSearch(query); 
    }}>
        <input type="text" name="query"/>
        <button type="reset">✖️</button>
        <button type="submit">🔍</button>
    </form>
}